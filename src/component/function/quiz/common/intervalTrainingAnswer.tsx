
import { Button, Box} from '@mui/material/';
import { Question } from './getQuizContents';
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
				questions.map((item) => {
					return (
						<div>
							<button
								className={`${"p-quiz-mv__button-option"} ${item.result === 'correct' ? "correct" : ""} 
								${item.result === 'inCorrect' ? "inCorrect" : ""} 
								${answer === 'correct' && item.result === '' ? "unSelected": ""}`}
								onClick={() => handleAnswerButtonClick(item.value)}
								disabled={answer === 'correct'}
								>{item.answerText}
								{item.result === 'correct' ? <TripOriginIcon className='circle-icon'/> : ''}
								{item.result === 'inCorrect' ? <CloseIcon className='cross-icon'/> : ''}	
							</button>
						</div>
					)
			})}
		</div>
	);
}
export default Answer;