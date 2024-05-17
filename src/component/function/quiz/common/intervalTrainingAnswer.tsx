import { Question } from './getQuestionData';

import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
	questions: Question[]
	handleAnswerButtonClick: (value: number) => void
	answer: string
}

export const Answer = ({questions, handleAnswerButtonClick, answer}: Props) => {
	return (
		<div className="p-quiz-mv__button-option-box01">
			<div className="p-quiz-mv__button-option-box">
				{
					questions.map((item) => {
						return (
							<button
								className={`${"p-quiz-mv__button-option"} 
								${item.result === 'correct' ? "p-quiz-mv__button-correct" : ""} 
								${item.result === 'inCorrect' ? "p-quiz-mv__button-inCorrect" : ""} 
								${answer === 'correct' && item.result === '' ? "p-quiz-mv__button-unSelected": ""}`}
								onClick={() => handleAnswerButtonClick(item.value)}
								disabled={answer === 'correct'}
								>{item.answerText}
								{item.result === 'correct' ? <TripOriginIcon className='p-quiz-mv__circle-icon'/> : ''}
								{item.result === 'inCorrect' ? <CloseIcon className='p-quiz-mv__cross-icon'/> : ''}	
							</button>
						)
				})}
			</div>
		</div>
	);
}
export default Answer;