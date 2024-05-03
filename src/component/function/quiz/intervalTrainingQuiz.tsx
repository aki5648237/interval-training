import {FC, useState, useEffect} from 'react';
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
import { IntervalQuizResultContents } from "../../contents/quiz/intervalQuizResultContents";

/** @jsxImportSource @emotion/react */
import AppHeader from "../../contents/common/appHeader";

// 際レンダリング防止のため、最初に定義
let rand: number;

let my_audio: HTMLAudioElement;
const IntervalTrainingQuiz: FC = () => {

	// 問題No
	const [currentQuestion, setCurrentQuestion] =useState<number>(1);
	// 聞いた回数
	// const [listenCount, setListenCount] = useState<number>(0);
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
		<div className="l-wrapper">
			<AppHeader />
			<div className="l-main">
				<div className="l-main__inner">
					{/* クイズ内容 */}
					<div className={openQuiz ? "l-main__invisible" : ""}>
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
						/>
					</div>
					{/* クイズ結果 */}
					<div className={openResult ? "l-main__invisible" : ""}>
						<IntervalQuizResultContents 
							handleResetButton={handleResetButton}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default IntervalTrainingQuiz;
