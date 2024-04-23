import { useNavigate } from "react-router-dom"
import { Typography, Button, Card, Box, List, ListItem, ListItemText} from '@mui/material/';
import {FC, useState, useEffect, useContext} from 'react';
import { Answer } from './common/intervalTrainingAnswer'; 
import { Question } from "./common/getQuizContents";

// 機能コンポーネント
import { SetQuestionData } from "./common/setQuestionData";
import SetQuestion from "./common/setQuestion";
import HandleAnswerButton from "./common/handleButtonClick";
import { HandlePlayButtonClick } from "./common/handleButtonClick";
import { HandleResultDisplayButton } from "./common/handleButtonClick";
import { HandleNextDisplayButtonClick as HandleNextDisplayButton } from "./common/handleButtonClick";
import { HandleResetButton } from "./common/handleButtonClick";
import { GetQuizContent } from "./common/getQuizContents";
import { useAnswer } from "../../../hook/playBackHooks";

// 表示コンポーネント
import { IntervalQuizContents } from "../../contents/quiz/intervalQuizContents";

/** @jsxImportSource @emotion/react */
import AppHeader from "../../contents/common/appHeader";

// 際レンダリング防止のため、最初に定義
let rand: number;

let my_audio: HTMLAudioElement;
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
		rand = Math.floor(Math.random() * questions.length);

		// 問題をセット
		my_audio = SetQuestion(rand);
		// クイズ結果リストの結果を破棄
		SetQuestionData(currentQuestion, questionList, setQuestionList, setResultQuiz, setNextQuiz);

	},[currentQuestion]);

	// クイズ内容の取得
	const questions = GetQuizContent();
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
					<IntervalQuizContents 
						currentQuestion={currentQuestion}
						playSound={playSound}
						nextQuiz={nextQuiz}
						nextText={nextText}
						resultQuiz={resultQuiz}
						answer={answer}
						questionList={questionList}
						handlePlayButton={handlePlayButton}
						handleAnswerButton={handleAnswerButton}
						handleNextDisplayButton={handleNextDisplayButton}
						handleResultDisplayButton={handleResultDisplayButton}
						// navigate={navigate}
					/>
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
