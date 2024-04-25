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
		<>
			<Box sx={{margin: '40px 20px 0 20px'}}>
				<Box sx={{ textAlign: 'center'}}>
					<Typography className="sub-title" variant="h2">{currentQuestion}問 このインターバルは？</Typography>
				</Box>
				<Box sx={{textAlign: 'center', marginTop: '35px'}}>
					<Button 
						startIcon={playSound === false ?  <PlayArrowIcon className="play-icon"/> : <ReplayIcon className="play-icon"/>}
						className="main-button" onClick={() => handlePlayButton()} variant='outlined'>{playSound === false ? '再生' : 'リプレイ'}</Button>
				</Box>
			</Box>
			<Card className="cardStyle" sx={{margin: '35px 20px 35px 20px', height: '280px'}} variant="outlined">
				<Box sx={{backgroundColor: 'rgba(170, 95, 0, 0.6)', textAlign: 'center'}}>
					<Typography variant="h2" sx={{padding : '6px', color: 'white'}}>選択肢</Typography>
				</Box>
				<Box sx={{padding: '0 10px'}}>
					<Answer 
						questions={questionList}
						handleAnswerButtonClick={handleAnswerButton}
						answer={answer}
					/>
				</Box>
				<Box sx={{textAlign: 'center', marginTop: '30px'}}>
					<Box className={nextQuiz ? "" : "invisible"}>
						<Button className={`${"sub-button"} ${nextText === 'スキップ' ? "skip-button": ""}`} onClick={() => handleNextDisplayButton()}  variant='outlined'>{nextText}</Button>
					</Box>
					
					<Box className={resultQuiz ? "" : "invisible"}>
						<Button className={answer === 'correct' ? "result-button" : "skip-button"} onClick={() => handleResultDisplayButton()} variant='outlined'>結果</Button>
					</Box>
				</Box>
			</Card>
					
			<Box sx={{textAlign: 'center'}}>
				<Button className="sub-button" onClick={() => navigate('/')} variant='outlined'>Top</Button>
			</Box>
		</>
	)
}
 export default IntervalQuizContents;