import { useNavigate } from "react-router-dom"
import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import { Question } from '../../function/quiz/common/getQuestionData';
import Answer from '../../function/quiz/common/intervalTrainingAnswer';
import { QuizSetting } from "../../function/quiz/intervalTrainingQuiz";

type Props = {
	currentQuestion : number,
	quizSetting : QuizSetting,
  playSound : boolean,
  nextQuiz : boolean,
  nextText : string,
  resultQuiz : boolean,
  answer : string,
  questionList : Question[],
  handlePlayButton : () => void,
  handleAnswerButton : (value: number) => void,
  handleNextDisplayButton : () => void,
  handleResultDisplayButton : () => void,
}

export const IntervalQuizContents: React.FC<Props> = (
	{
		currentQuestion,
		quizSetting,
		playSound,
		nextQuiz,
		nextText,
		resultQuiz,
		answer,
		questionList,
		handlePlayButton,
		handleAnswerButton,
		handleNextDisplayButton,
		handleResultDisplayButton,
	} : Props
) => {
	const navigate = useNavigate();
	return (
		<section className="p-quiz-mv">
			<div className="p-quiz-mv-inner">
				<div>
						<h2 className="p-quiz-mv__title">Q{currentQuestion}/{quizSetting.selectQuizNumber} このインターバルは？</h2>
						<button className="p-quiz-mv__button-primary"
							onClick={() => handlePlayButton()}>
							{playSound === false ?  <PlayArrowIcon className="p-quiz-mv__play-icon"/> : <ReplayIcon className="p-quiz-mv__play-icon"/>}
							<span>{playSound === false ? '再生' : 'リプレイ'}</span>
						</button>
				</div>
				<div className="p-quiz-mv__option-box">
					<div className="p-quiz-mv__sub-title">
						<h2>選択肢</h2>
					</div>
					<div className="p-quiz-mv__quiz-option">
						<Answer 
							questions={questionList}
							handleAnswerButtonClick={handleAnswerButton}
							answer={answer}
						/>
					</div>
					<div>
						<div className={nextQuiz ? "" : "l-main__invisible"}>
							<button className={`${"p-quiz-mv__button-next"} ${nextText === 'スキップ' ? "p-quiz-mv__button-skip": ""}`} onClick={() => handleNextDisplayButton()}>{nextText}</button>
						</div>
						
						<div className={resultQuiz ? "" : "l-main__invisible"}>
							<button className={`${"p-quiz-mv__button-next"} ${answer === 'correct' ? "p-quiz-mv__button-result" : "p-quiz-mv__button-skip"}`} onClick={() => handleResultDisplayButton()}>結果</button>
						</div>
					</div>
				</div>
				<button className="p-quiz-mv__button-top" onClick={() => navigate('/')}>Top</button>
			</div>
		</section>
	)
}
 export default IntervalQuizContents;