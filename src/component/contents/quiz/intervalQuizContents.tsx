import { useNavigate } from "react-router-dom"
import React from 'react';
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';
import { Question } from '../../function/quiz/common/getQuizContents';

import Answer from '../../function/quiz/common/intervalTrainingAnswer';

type Props = {
	currentQuestion : number,
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
						<h2 className="p-quiz-mv__title">{currentQuestion}問 このインターバルは？</h2>
						{/* <Button 
							startIcon={playSound === false ?  <PlayArrowIcon className="play-icon"/> : <ReplayIcon className="play-icon"/>}
							className="p-quiz-mv__button-primary" onClick={() => handlePlayButton()} variant='outlined'>{playSound === false ? '再生' : 'リプレイ'}</Button> */}
						<button className="p-quiz-mv__button-primary"
							onClick={() => handlePlayButton()}>
							{playSound === false ?  <PlayArrowIcon className="play-icon"/> : <ReplayIcon className="play-icon"/>}
							{playSound === false ? '再生' : 'リプレイ'}
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
						<div className={nextQuiz ? "" : "invisible"}>
							<button className={`${"p-quiz-mv__button-next"} ${nextText === 'スキップ' ? "skip-button": ""}`} onClick={() => handleNextDisplayButton()}>{nextText}</button>
						</div>
						
						<div className={resultQuiz ? "" : "invisible"}>
							<button className={`${"p-quiz-mv__button-next"} ${answer === 'correct' ? "result-button" : "skip-button"}`} onClick={() => handleResultDisplayButton()}>結果</button>
						</div>
					</div>
				</div>
						
				<button className="p-quiz-mv__button-top" onClick={() => navigate('/')}>Top</button>
				
			</div>
		</section>
	)
}
 export default IntervalQuizContents;