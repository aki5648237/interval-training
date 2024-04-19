
import { Typography, Button, Card, Box} from '@mui/material/';
import { Question } from '../intervalTrainingQuiz';
import { QuestionResult } from '../intervalTrainingQuiz';
import "../../../../style/styles.css";

import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	questions: Question[]
	handleAnswerButtonClick: (value: number) => void
	answer: string
}

export const Answer = ({questions, handleAnswerButtonClick, answer}: Props) => {
	
	return (
		<div>
			{
				questions[0].answerOptions.map((item) => {
					return (
						<Box sx={{ width: '50%', textAlign: 'center', display: 'inline-block'}}>
							<Button
								className={`${"option-button"} ${item.result === 'correct' ? "correct" : ""} 
								${item.result === 'inCorrect' ? "inCorrect" : ""} 
								${answer === 'correct' && item.result === '' ? "unSelected": ""}`}
								onClick={() => handleAnswerButtonClick(item.value)}
								disabled={answer === 'correct'}
								variant='outlined'>{item.answerText}
								{item.result === 'correct' ? <TripOriginIcon className='circle-icon'/> : ''}
								{item.result === 'inCorrect' ? <CloseIcon className='cross-icon'/> : ''}	
							</Button>
						</Box>
					)
			})}
		</div>
	);
}

export default Answer;