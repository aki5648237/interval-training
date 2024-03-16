import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Question } from './intervalTrainingQuiz';

type Props = {
	currentQuestion: number
	questions: Question[]
	handleAnswerButtonClick: (value: number) => void
}

export const Answer = ({currentQuestion, questions, handleAnswerButtonClick}: Props) => {
	
	return (
		<div>
			<Typography>{currentQuestion}問</Typography>
			{
				questions[0].answerOptions.map((item) => {
					return <Button 
										onClick={() => handleAnswerButtonClick(item.value)}
										variant='outlined'>{item.answerText}</Button>;
			})}
		</div>
	);
	
}

export default Answer;