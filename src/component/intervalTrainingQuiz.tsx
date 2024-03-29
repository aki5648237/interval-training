import { useNavigate } from "react-router-dom"
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';
import React,{useState, useEffect} from 'react';
import { Answer } from './intervalTrainingAnswer'; 
import major3rd from '../sound/major3rd.mp3';
import perfect5th from '../sound/perfect5th.mp3';
import octabe from '../sound/octave.mp3';
/** @jsxImportSource @emotion/react */
import AppHeader from "./appHeader";
import MainText from "./mainText";

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

	const navigate = useNavigate();

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
	// 次のクイズボタンを表示するフラグ
	const [nextQuiz, setNextQuiz] = useState<boolean>(true);
	// 結果を見るボタンを表示するフラグ
	const [resultQuiz, setResultQuiz] = useState<boolean>(false);
	// 正解、不正解のフラグ
	const [answer, setAnswer] = useState<string>('');
	// 選択肢したボタンのvalue
	const [selectValue, setSelectValue] = useState<number>(99);

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

	const questions: Question[] = [
		{
			answerOptions:[
				{answerText: 'Major 3rd', value: 0},
				{answerText: 'Perfect 5th', value: 1},
				{answerText: 'Octave', value: 2},
			],
		},
	];

	const handleAnswerButtonClick = (value: number): void=> {

		setSelectValue(value);

		console.log('クイズ結果を表示するフラグ' + resultQuiz);
		console.log('選択した値' + value);
		console.log('答えの値' + rand);

		// 正解時、次の問題へ移る
		if (value === rand) {

			// ボタンの色を緑にする
      setAnswer('correct');

			console.log('現在の問題No' + currentQuestion);
			if (currentQuestion > 9) {
				// 10問回答後、結果見るボタン表示
				setResultQuiz(true);
				setNextQuiz(false);
			}
		}
		else {
			// ボタンの色を赤くする
			setAnswer('inCorrect');
			setMissCount((missCount) => missCount + 1);
		}
	}

		// ボタン押下時音を鳴らす
		const jsplay = () => {
			my_audio.currentTime = 0;
			my_audio.play();
			setListenCount((listenCount) => listenCount + 1);
			console.log(listenCount);
		}

	// 次の問題を表示
	const nextDisplay = () => {
		setCurrentQuestion((currentQuestion) => currentQuestion + 1);
		// 選択肢のボタンのcssを破棄
		setAnswer('');
	}	

	// 結果を表示
	const resultDisplay = () => {
		setOpenQuiz(true);
		setOpenResult(false);
	}

	// 結果の破棄
	const ResetResult = () => {
		setCurrentQuestion(1);
		setListenCount(0);
		setMissCount(0);
		setOpenQuiz(false);
		setOpenResult(true);
		setNextQuiz(true);
		setResultQuiz(false);
		setAnswer('');
	}
	return (
		<>
			<AppHeader />
			<Box className="container">
				<Box className={openQuiz ? "invisible" : ""}>
					{/* <MainText /> */}
					<Typography variant="h2" sx={{paddingTop: '50px', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold', color: '#F4538A'}}>
						インターバルクイズ
					</Typography>
					<Card sx={{margin: '0 20px 0 20px', height: '170px'}} variant="outlined">
						<Box sx={{backgroundColor: '#00bfff'}}>
							<Typography variant="h3" sx={{paddingTop: '10px', paddingLeft: '18px', paddingBottom: '10px', color: 'white'}}>{currentQuestion}問 このインターバルは何かな？</Typography>
						</Box>
						<Box sx={{textAlign: 'center', marginTop: '35px'}}>
							<Button className="button" sx={{ width: '200px', height: '50px', fontSize: '18px'}} onClick={() => jsplay()} variant='outlined'>はじめに聞く</Button>
						</Box>
					</Card>
					<Card sx={{margin: '30px 20px 20px 20px', height: '350px'}} variant="outlined">
						<Box sx={{backgroundColor: '#00bfff'}}>
							<Typography variant="h3" sx={{paddingTop: '10px', paddingLeft: '18px', paddingBottom: '10px', color: 'white'}}>選択肢</Typography>
						</Box>

						<Answer 
							currentQuestion={currentQuestion}
							questions={questions}
							handleAnswerButtonClick={handleAnswerButtonClick}
							answer={answer}
							selectValue={selectValue}
						/>
						<Box sx={{textAlign: 'center', marginTop: '20px'}}>
							<Box className={nextQuiz ? "" : "invisible"}>
								<Button className="button" onClick={() => nextDisplay()}  variant='outlined' sx={{width: '130px', height: '50px', fontSize: '18px'}}>次のクイズ</Button>
							</Box>
							
							<Box className={resultQuiz ? "" : "invisible"}>
								<Button onClick={() => resultDisplay()} variant='outlined' sx={{width: '130px', height: '50px', fontSize: '18px'}}>結果を見る</Button>
							</Box>
						</Box>
					</Card>

					<Button onClick={() => navigate('/')} variant='outlined' sx={{marginLeft: '20px'}}>Topに戻る</Button>

				</Box>
					<Box className={openResult ? "invisible" : ""}>
					<Typography variant="h2" sx={{paddingTop: '50px', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold', color: '#F4538A'}}>
						結果
					</Typography>
						<Card sx={{margin: '0 20px 40px 20px', height: '20 0px'}} variant="outlined">
							<Box sx={{marginLeft: '20px'}}>
								<List>
									<ListItem>
										<ListItemText>聞いた回数{listenCount}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>間違えた回数{missCount}</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText>得点</ListItemText>
									</ListItem>
								</List>
							</Box>
						</Card>
						<Box sx={{ textAlign: 'center', marginTop: '10px'}}>
							<Button className="button" sx={{width: '130px', height: '50px', marginRight:'20px'}} onClick={() => navigate('/')} variant='outlined'>Topに戻る</Button>
							<Button className="button" sx={{width: '130px', height: '50px', marginLeft: '20px'}} onClick={() => ResetResult()} variant='outlined'>もう一度</Button>
						</Box>
					</Box>
			</Box>
		</>
	)
}
export default IntervalTrainingQuiz;
