import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React,{useState} from 'react';
import { Answer } from './intervalTrainingAnswer'; 



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
	// 聞いた回数
	const [listenCount, setListenCount] = useState<number>(0);


	// 問題を定数soudNameにランダム格納
	const getQuiz = (): string => {
		const rand = Math.floor(Math.random() * questions.length)
		soundName = questions[1].answerOptions[rand].answerText;
		const my_audio = new Audio('/' + soundName + '.mp3');

		// クイズ表示時に一回流す
		my_audio.play();
		setListenCount(listenCount + 1);
	
		return '';
	
	}

	const questions: Question[] = [
		{
			answerOptions:[
				{answerText: 'Major 3rd(長3度)', value: 1},
				{answerText: 'Perfect 5th(完全5度)', value: 2},
				{answerText: 'Octave(完全8度)', value: 3},
			],
		},
	];



	// 問題数
	const [currentQuestion, setCurrentQuestion] =useState<number>(0);

	const handleAnswerButtonClick = (): void => {

		// if (isCorrect === true) {

		}
		const nextQuestion: number = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
	
	return (
		<div>
			<Typography variant="h3">
				インターバルクイズ
			</Typography>

			<Button variant='outlined'>はじめに聞く</Button>

			<Typography>このインターバルは何かな？</Typography>

			<Typography>選択肢</Typography>

			<Answer 
				currentQuestion={currentQuestion}
				questions={questions}
				handleAnswerButtonClick={handleAnswerButtonClick}
			/>
		</div>
	)
}
export default IntervalTrainingQuiz;
