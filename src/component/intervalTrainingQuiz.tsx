import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React,{useState, useEffect} from 'react';
import { Answer } from './intervalTrainingAnswer'; 
import major3rd from '../sound/major3rd.mp3';
import perfect5th from '../sound/perfect5th.mp3';
import octabe from '../sound/octave.mp3';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "../style/styles.css";


let my_audio: HTMLAudioElement;
// 際レンダリング防止のため、最初に定義
let rand: number;

type AnswerOption ={
	answerText: string;
	value: number;
}

export type Question = {
  answerOptions: AnswerOption[];
}

const IntervalTrainingQuiz = () => {

	// 問題名格納
	let soundName: string = '';
	// 問題No
	const [currentQuestion, setCurrentQuestion] =useState<number>(1);
	// 聞いた回数
	const [listenCount, setListenCount] = useState<number>(0);
	// 間違えた回数
	const [missCount, setMissCount] = useState<number>(0);
	// 問題を非表示にするフラグ
	const [openQuiz, setOpenQuiz] = useState<boolean>(false);
	// 結果を非表示にするフラグ
	const [openResult, setOpenResult] = useState<boolean>(true);


	// 問題を定数soudNameにランダム格納
	useEffect(() => {
		rand = Math.floor(Math.random() * questions[0].answerOptions.length);
		console.log('ランダム関数の値' + rand);
		// soundName = questions[0].answerOptions[rand].answerText;

		switch (rand) {
			case 0:
				my_audio = new Audio(major3rd);
				break;
			case 1:
				my_audio = new Audio(perfect5th);
				break;
			case 2:
				my_audio = new Audio(octabe);
				break;
		}
	},[currentQuestion]);


	const getQuiz = () => {
		
	}

	const questions: Question[] = [
		{
			answerOptions:[
				{answerText: 'Major 3rd(長3度)', value: 0},
				{answerText: 'Perfect 5th(完全5度)', value: 1},
				{answerText: 'Octave(完全8度)', value: 2},
			],
		},
	];

	

	const handleAnswerButtonClick = (value: number): void=> {

		console.log('選択した値' + value);
		console.log('答えの値' + rand);

		// 正解時、次の問題へ移る
		if (value === rand) {

			setCurrentQuestion((currentQuestion) => currentQuestion + 1);

			
			console.log('現在の問題No' + currentQuestion);
			if (currentQuestion > 9) {
				// 10問回答後、結果を表示
				setOpenQuiz(true);
				setOpenResult(false);
			}
		}
		else {
			setMissCount((missCount) => missCount + 1);
		}
	}
		// クイズ表示時に一回流す
		// my_audio.play();
		

		// ボタン押下時音を鳴らす
		const jsplay = () => {
			my_audio.currentTime = 0;
			my_audio.play();
			setListenCount((listenCount) => listenCount + 1);
			console.log(listenCount);
		}

		// 問題名取得
		// getQuiz();
	
	return (
		<>
			<div className={openQuiz ? "invisible" : ""}>
				<Typography variant="h3">
					インターバルクイズ
				</Typography>

				<Button onClick={() => jsplay()} variant='outlined'>はじめに聞く</Button>

				<Typography>このインターバルは何かな？</Typography>

				<Typography>選択肢</Typography>

				<Answer 
					currentQuestion={currentQuestion}
					questions={questions}
					handleAnswerButtonClick={handleAnswerButtonClick}
				/>
			</div>

			<div className={openResult ? "invisible" : ""}>
				<Typography>結果</Typography>

				<ul>
					<li>聞いた回数:{listenCount}</li>
					<li>間違えた回数:{missCount}</li>
					<li>得点</li>
				</ul>
			</div>
		</>
	)
}

// 要素を見えなくする
// const Invisible = css({
// 	display:"none",
// })



export default IntervalTrainingQuiz;
