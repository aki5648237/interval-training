
import { Typography, Button, Card, Box} from '@mui/material/';
import { Question } from './intervalTrainingQuiz';
import { QuestionResult } from './intervalTrainingQuiz';
import "../style/styles.css";

import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	questions: Question[]
	handleAnswerButtonClick: (answerText: string, value: number) => void
	answer: string
	resultList: QuestionResult[]
}

export const Answer = ({questions, handleAnswerButtonClick, answer, resultList}: Props) => {
	
	return (
		<div>
			{
				questions[0].answerOptions.map((item, index) => {
					return <Box sx={{ width: '50%', textAlign: 'center', display: 'inline-block'}}>
										<Button
											className={`${"option-button"} ${resultList[index].result === 'correct' ? "correct" : ""} ${resultList[index].result === 'inCorrect' ? "inCorrect" : ""} ${answer === 'correct' && resultList[index].result === '' ? "unSelected": ""}`}
											onClick={() => handleAnswerButtonClick(item.answerText, item.value)}
											disabled={answer === 'correct'}
											variant='outlined'>{item.answerText}
											{resultList[index].result === 'correct' ? <TripOriginIcon className='circle-icon'/> : ''}
											{resultList[index].result === 'inCorrect' ? <CloseIcon className='cross-icon'/> : ''}	
										</Button>
									</Box>
			})}
		</div>
	);
}

export default Answer;