import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Question } from './intervalTrainingQuiz';
import "../style/styles.css";

import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	currentQuestion: number
	questions: Question[]
	handleAnswerButtonClick: (value: number) => void
	answer: string
	selectValue: number
}

export const Answer = ({currentQuestion, questions, handleAnswerButtonClick, answer, selectValue}: Props) => {
	
	console.log('押下したボタンの結果' + answer);
	return (
		<div>
			<Typography>{currentQuestion}問</Typography>
			{
				questions[0].answerOptions.map((item) => {
					return <Button
										className={`${answer === 'correct' && item.value === selectValue ? "correct" : ""} ${answer === 'inCorrect' && item.value === selectValue ? "inCorrect" : ""}`}
										onClick={() => handleAnswerButtonClick(item.value)}
										variant='outlined'>{item.answerText}
										{answer === 'correct' && item.value === selectValue ? <TripOriginIcon /> : ''}
										{answer === 'inCorrect' && item.value === selectValue ? <CloseIcon /> : ''}	
									</Button>
										
			})}
		</div>
	);
	
}

export default Answer;