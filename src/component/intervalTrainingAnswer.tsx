
import { Typography, Button, Card, Box} from '@mui/material/';
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
			{
				questions[0].answerOptions.map((item) => {
					return <Box sx={{ textAlign: 'center', marginTop: '20px'}}>
										<Button
											sx={{width: '200px', height: '50px', fontSize: '18px', justifyContent: 'flex-start', position: 'relative', textTransform: 'none'}}
											className={`${"button"} ${answer === 'correct' && item.value === selectValue ? "correct" : ""} ${answer === 'inCorrect' && item.value === selectValue ? "inCorrect" : ""}`}
											onClick={() => handleAnswerButtonClick(item.value)}
											disabled={answer === 'correct'}
											variant='outlined'>{item.answerText}
											{answer === 'correct' && item.value === selectValue ? <TripOriginIcon fontSize="large" sx={{color: 'lime', position: 'absolute', right: '10px'}}/> : ''}
											{answer === 'inCorrect' && item.value === selectValue ? <CloseIcon fontSize="large" sx={{color: 'red', position: 'absolute', right: '10px'}}/> : ''}	
										</Button>
									</Box>
			})}
		</div>
	);
}

export default Answer;