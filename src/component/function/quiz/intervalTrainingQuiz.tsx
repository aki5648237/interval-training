import { useNavigate } from "react-router-dom"
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';
import {FC, useState, useEffect, useContext} from 'react';
import { Answer } from './common/intervalTrainingAnswer'; 

// 機能コンポーネント
import { SetQuestionData } from "./common/setQuestionData";
import SetQuestion from "./common/setQuestion";
import HandleAnswerButton from "./common/handleButtonClick";
import { HandlePlayButtonClick } from "./common/handleButtonClick";
import { HandleResultDisplayButton } from "./common/handleButtonClick";
import { HandleNextDisplayButtonClick as HandleNextDisplayButton } from "./common/handleButtonClick";
import { HandleResetButton } from "./common/handleButtonClick";
import { useAnswer } from "../../../hook/playBackHooks";

/** @jsxImportSource @emotion/react */
import AppHeader from "../../contents/common/appHeader";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ReplayIcon from '@mui/icons-material/Replay';

// 際レンダリング防止のため、最初に定義
let rand: number;

type AnswerOption ={
	answerText: string;
	value: number;
	result: string;
	missCount: number;
}

let my_audio: HTMLAudioElement;

export type Question = {
  answerOptions: AnswerOption[];
}

const IntervalTrainingQuiz: FC = () => {

	const navigate = useNavigate();

	// 問題No
	const [currentQuestion, setCurrentQuestion] =useState<number>(1);
	// 聞いた回数
	const [listenCount, setListenCount] = useState<number>(0);
	// 問題を非表示にするフラグ
	const [openQuiz, setOpenQuiz] = useState<boolean>(false);
	// 結果を非表示にするフラグ
	const [openResult, setOpenResult] = useState<boolean>(true);
	// 次のクイズボタンを表示するフラグ
	const [nextQuiz, setNextQuiz] = useState<boolean>(true);
	// 結果を見るボタンを表示するフラグ
	const [resultQuiz, setResultQuiz] = useState<boolean>(false);
	// 正解、不正解のフラグ
	// const [answer, setAnswer] = useState<string>('');
	// 再生押下時のフラグ
	const [playSound, setPlaySound] = useState<boolean>(false)
	// スキップ/次へ文言
	const [nextText, setNextText] = useState<string>("スキップ")

	// hooksの読み込み
	const {answer, setAnswer} = useAnswer();

	// 問題を定数soudNameにランダム格納
	useEffect(() => {
		rand = Math.floor(Math.random() * questions[0].answerOptions.length);

		// 問題をセット
		my_audio = SetQuestion(rand);
		// クイズ結果リストの結果を破棄
		SetQuestionData(currentQuestion, questionList, setQuestionList, setResultQuiz, setNextQuiz);

	},[currentQuestion]);

	// クイズ内容
	const questions: Question[] = [
		{
			answerOptions:[
				{answerText: 'Major 3rd', value: 0, result: '', missCount: 0},
				{answerText: 'Perfect 5th', value: 1, result: '', missCount: 0},
				{answerText: 'Octave', value: 2, result: '', missCount: 0},
			]
		},
	];

	

	const [questionList, setQuestionList] = useState<Question[]>(questions);

	// 選択肢押下時の処理
	const handleAnswerButton = (value: number): void=> {
		const nextList =  HandleAnswerButton(questionList, value, rand, setAnswer, setNextText);
		setQuestionList(nextList);
	}

	// ボタン押下時音を鳴らす
	const handlePlayButton = () => {
		HandlePlayButtonClick(my_audio, playSound, setPlaySound);
	}

	// 次の問題を表示
	const handleNextDisplayButton = () => {
		HandleNextDisplayButton(currentQuestion, setCurrentQuestion, setAnswer,setNextText, setPlaySound);
	}	

	// 結果を表示
	const handleResultDisplayButton = () => {
		HandleResultDisplayButton(setOpenQuiz, setOpenResult);
	}
	
	// 結果の破棄
	const handleResetButton = () => {
		HandleResetButton(setCurrentQuestion, setOpenQuiz, setOpenResult, setNextQuiz, setResultQuiz, setAnswer);
	}

	return (
		<>
			<AppHeader />
			<Box className="container">
				<Box className={openQuiz ? "invisible" : ""}>
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
				</Box>
					<Box className={openResult ? "invisible" : ""} sx={{marginTop: '40px'}}>
						<Box sx={{textAlign: 'center'}}>
							<Typography className="sub-title" variant="h2" sx={{paddingTop: '50px', marginBottom: '10px'}}>
								クイズの結果
							</Typography>
						</Box>
						<Box sx={{margin: '0 20px 40px 20px', textAlign: 'center'}}>
							<Box>
								<List>
									<ListItem>
										<ListItemText>聞いた回数{listenCount}</ListItemText>
									</ListItem>
									<ListItem>
										{/* <ListItemText>間違えた回数{missCount}</ListItemText> */}
									</ListItem>
									<ListItem>
										<ListItemText>得点</ListItemText>
									</ListItem>
								</List>
							</Box>
						</Box>
						<Box sx={{ textAlign: 'center', marginTop: '10px'}}>
							<Button className="button" sx={{width: '130px', height: '50px', marginRight:'20px', fontSize: '18px'}} onClick={() => navigate('/')} variant='outlined'>Top</Button>
							<Button className="button" sx={{width: '130px', height: '50px', marginLeft: '20px', fontSize: '18px'}} onClick={() => handleResetButton()} variant='outlined'>もう一度</Button>
						</Box>
					</Box>
			</Box>
		</>
	)
}
export default IntervalTrainingQuiz;
