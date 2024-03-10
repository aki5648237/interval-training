import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React,{useState} from 'react';
import { Answer } from './intervalTrainingAnswer';         

const IntervalTrainingQuiz = () => {

	type questions = [
		{
			answerOptions: [
				{answerText: string,
				value: number}
			]
		}
	]

	const questions = [
		{
			answerOptions:[
				{answerText: 'Major 3rd(長3度)', value: 1},
				{answerText: 'Perfect 5th(完全5度)', value: 2},
				{answerText: 'Octave(完全8度)', value: 3},
			]
		}
	]

	// 問題数
	const [currentQuestion, setCurrentQuestion] =useState<number>(0);

	const handleAnswerButtonClick = () => {
		const nextQuestion: number = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		}
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
			/>
			
		</div>
	)
}
export default IntervalTrainingQuiz;
