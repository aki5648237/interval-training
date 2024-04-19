import { useNavigate } from "react-router-dom"
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';
import {FC, useState, useEffect, useContext} from 'react';
import { Answer } from './common/intervalTrainingAnswer'; 

// 機能コンポーネント
import SetQuestion from "./common/setQuestion";
import HandleAnswerButtonClick from "./common/handleAnswerButtonClick";

import { ChangeContext } from "../../../App";
import { UserContext } from "../../../context/context";


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

export type QuestionResult = {
	resultText: string;
	result: string;
	missCount: number;
}

let my_audio: HTMLAudioElement;

export type Question = {
  answerOptions: AnswerOption[];
}

const IntervalTrainingQuiz: FC = () => {

	const {changeContext, setChangeContext} = useContext(ChangeContext)
	const {test, setTest} = useContext(UserContext)
	setTest('aaaaa');
	// console.log(test)
	// console.log(changeContext)
	// setChangeContext(false);
	// console.log(changeContext)
	// const test = useContext(UserContext)
	// console.log(test)

	const navigate = useNavigate();

	// 問題No
	const [currentQuestion, setCurrentQuestion] =useState<number>(1);
	// 聞いた回数
	const [listenCount, setListenCount] = useState<number>(0);
	// 間違えた回数
	// const [missCount, setMissCount] = useState<number>(0);
	// 問題を非表示にするフラグ
	const [openQuiz, setOpenQuiz] = useState<boolean>(false);
	// 結果を非表示にするフラグ
	const [openResult, setOpenResult] = useState<boolean>(true);
	// 次のクイズボタンを表示するフラグ
	const [nextQuiz, setNextQuiz] = useState<boolean>(true);
	// 結果を見るボタンを表示するフラグ
	const [resultQuiz, setResultQuiz] = useState<boolean>(false);
	// 正解、不正解のフラグ
	const [answer, setAnswer] = useState<string>('');
	// 選択肢したボタンのvalue
	const [selectValue, setSelectValue] = useState<number>(99);
	// 再生押下時のフラグ
	const [playSound, setPlaySound] = useState<boolean>(false)
	// スキップ/次へ文言
	const [nextText, setNextText] = useState<string>("スキップ")

	// 問題を定数soudNameにランダム格納
	useEffect(() => {
		rand = Math.floor(Math.random() * questions[0].answerOptions.length);

		
		console.log(answer)
		
		// 問題をセット
		my_audio = SetQuestion(rand);
	
		// クイズ結果リストの結果を破棄
		const nextList: Question[] = [
			{
				answerOptions : questionList[0].answerOptions.map((list) => {
					return {...list, result: ''}
				})
			}
		]
		setQuestionList(nextList);

		if (currentQuestion > 9) {
			// 10問回答後、結果見るボタン表示
			setResultQuiz(true);
			setNextQuiz(false);
}
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

	// クイズの結果
	// const questionResults: QuestionResult[] = [
	// 	{resultText: 'Major 3rd', result: '', missCount: 0},
	// 	{resultText: 'Perfect 5th', result: '', missCount: 0},
	// 	{resultText: 'Octave', result: '', missCount: 0},
	// ]
	// const [resultList, setResultList] = useState<QuestionResult[]>(questionResults);
	
	// 選択肢押下時の処理
	const handleAnswerButtonClick = (value: number): void=> {
	
		const nextList: Question[] = [
			{
				answerOptions: questionList[0].answerOptions.map((list, index) => {
					if (value === list.value) {
						if (rand === value && value === list.value) {
							setAnswer('correct');
							setNextText('次へ');
							return {...list, result:'correct', missCount: list.missCount};
						} else {
							return {...list, result:'inCorrect', missCount: list.missCount + 1};
						}
					}
					else {
						return {...list}
					}
				})
			}
		];
		setQuestionList(nextList);
	}
	// const nextList =  HandleAnswerButtonClick(questionList,value, rand);
	
	
	// ボタン押下時音を鳴らす
	const jsplay = () => {
		if (my_audio !== undefined) {
			my_audio.currentTime = 0;
			my_audio.play();
		}
			
		setListenCount((listenCount) => listenCount + 1);
		if (playSound === false) {
			setPlaySound(true);
		}
	}

	// 次の問題を表示
	const nextDisplay = () => {
		setCurrentQuestion((currentQuestion) => currentQuestion + 1);
		// 選択肢のボタンのcssを破棄
		setAnswer('');
		setNextText('スキップ');
		setPlaySound(false);
	}	

	// 結果を表示
	const resultDisplay = () => {
		setOpenQuiz(true);
		setOpenResult(false);
	}

	// 結果の破棄
	const ResetResult = () => {
		setCurrentQuestion(1);
		setListenCount(0);
		// setMissCount(0);
		setOpenQuiz(false);
		setOpenResult(true);
		setNextQuiz(true);
		setResultQuiz(false);
		setAnswer('');
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
								className="main-button" onClick={() => jsplay()} variant='outlined'>{playSound === false ? '再生' : 'リプレイ'}</Button>
						</Box>
					</Box>
					<Card className="cardStyle" sx={{margin: '35px 20px 35px 20px', height: '280px'}} variant="outlined">
						<Box sx={{backgroundColor: 'rgba(170, 95, 0, 0.6)', textAlign: 'center'}}>
							<Typography variant="h2" sx={{padding : '6px', color: 'white'}}>選択肢</Typography>
						</Box>
						<Box sx={{padding: '0 10px'}}>
							<Answer 
								questions={questionList}
								handleAnswerButtonClick={handleAnswerButtonClick}
								answer={answer}
							/>
						</Box>
						<Box sx={{textAlign: 'center', marginTop: '30px'}}>
							<Box className={nextQuiz ? "" : "invisible"}>
								<Button className={`${"sub-button"} ${nextText === 'スキップ' ? "skip-button": ""}`} onClick={() => nextDisplay()}  variant='outlined'>{nextText}</Button>
							</Box>
							
							<Box className={resultQuiz ? "" : "invisible"}>
								<Button className={answer === 'correct' ? "result-button" : "skip-button"} onClick={() => resultDisplay()} variant='outlined'>結果</Button>
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
							<Button className="button" sx={{width: '130px', height: '50px', marginLeft: '20px', fontSize: '18px'}} onClick={() => ResetResult()} variant='outlined'>もう一度</Button>
						</Box>
					</Box>
			</Box>
		</>
	)
}
export default IntervalTrainingQuiz;
