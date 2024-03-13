import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Question } from './intervalTrainingQuiz';

type Props = {
	currentQuestion: number
	questions: Question[]
	handleAnswerButtonClick: () => void
}

export const Answer = ({currentQuestion, questions, handleAnswerButtonClick}: Props) => {
	
	return (
		<div>
			<Typography>{currentQuestion+1}問</Typography>

			{/* {questions[currentQuestion].answerOptions.map(item)=> {

			} */}
			

		</div>
	)
	
}

export default Answer;