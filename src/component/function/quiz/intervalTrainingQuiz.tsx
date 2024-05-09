import {FC, useState, useEffect} from 'react';
import { Question } from "./common/getQuestionData";

// 機能コンポーネント
import { SetQuestionData } from "./common/setQuestionData";
import SetQuestion from "./common/setQuestion";
import HandleAnswerButton from "./common/handleButtonClick";
import { HandlePlayButtonClick as HandlePlayButton } from "./common/handleButtonClick";
import { HandleResultDisplayButton } from "./common/handleButtonClick";
import { HandleNextDisplayButtonClick as HandleNextDisplayButton } from "./common/handleButtonClick";
import { HandleResetButton } from "./common/handleButtonClick";
import { GetQuestionData } from "./common/getQuestionData";
import { useAnswer } from "../../../hook/playBackHooks";
import { IntervalQuizResult } from '../result/intervalQuizResult';
import { SetResultData } from '../result/common/setResultData';

// 表示コンポーネント
import { IntervalQuizContents } from "../../contents/quiz/intervalQuizContents";

/** @jsxImportSource @emotion/react */
import AppHeaderContents from "../../contents/common/appHeaderContents";

// 際レンダリング防止のため、最初に定義
let rand: number;
let my_audio: HTMLAudioElement;

export type QuestionResult = {
	type : number
	missCount : number
	replayCount : number
}



const IntervalTrainingQuiz: FC = () => {

	// 問題No
	const [currentQuestion, setCurrentQuestion] =useState<number>(1);
	// 問題を非表示にするフラグ
	const [openQuiz, setOpenQuiz] = useState<boolean>(false);
	// 結果を非表示にするフラグ
	const [openResult, setOpenResult] = useState<boolean>(true);
	// 次のクイズボタンを表示するフラグ
	const [nextQuiz, setNextQuiz] = useState<boolean>(true);
	// 結果を見るボタンを表示するフラグ
	const [resultQuiz, setResultQuiz] = useState<boolean>(false);
	// 再生押下時のフラグ
	const [replayFlag, setReplayFlag] = useState<boolean>(false)
	// スキップ/次へ文言
	const [nextText, setNextText] = useState<string>("スキップ")

	// 結果に使用
	const [missCount, setMissCount] = useState<number>(0);
	const [replayCount, setReplayCount] = useState<number>(0);

	// hooksの読み込み
	const {answer, setAnswer} = useAnswer();

	const questionResult : QuestionResult[] = []
	const [questionResultList, setQuestionResultList] = useState<QuestionResult[]>(questionResult);

	// 問題を定数soudNameにランダム格納
	useEffect(() => {
		rand = Math.floor(Math.random() * questions.length);

		// 問題をセット
		my_audio = SetQuestion(rand);
		// クイズ結果リストの結果を破棄
		SetQuestionData(currentQuestion, questionList, setQuestionList, setResultQuiz, setNextQuiz);

		questionResultList.map((item, index) => {
			console.log( 'クイズ' + index +'種類' + item.type +'ミスの数' + item.missCount + 'リプレイの数' + item.replayCount)
		})

	},[currentQuestion]);

	// クイズ内容の取得
	const questions = GetQuestionData();
	const [questionList, setQuestionList] = useState<Question[]>(questions);

	// 選択肢押下時の処理
	const handleAnswerButton = (value: number): void=> {
		const nextList =  HandleAnswerButton(questionList, value, rand, setAnswer, setNextText, missCount, setMissCount);
		setQuestionList(nextList);
	}
	// ボタン押下時音を鳴らす
	const handlePlayButton = () => {
		HandlePlayButton(my_audio, replayFlag, setReplayFlag, replayCount, setReplayCount);
	}
	// 次の問題を表示
	const handleNextDisplayButton = () => {
		SetResultData(questionResultList, setQuestionResultList, rand, missCount, replayCount);
		HandleNextDisplayButton(currentQuestion, setCurrentQuestion, setAnswer,setNextText, setReplayFlag, setMissCount, setReplayCount);
	}

	// 結果を表示
	const handleResultDisplayButton = () => {
		SetResultData(questionResultList, setQuestionResultList, rand, missCount, replayCount);
		HandleResultDisplayButton(setOpenQuiz, setOpenResult);
	}
	// 結果の破棄
	const handleResetButton = () => {
		HandleResetButton(setCurrentQuestion, setOpenQuiz, setOpenResult, setNextQuiz, setResultQuiz, setAnswer);
	}

	return (
		<div className="l-wrapper">
			<AppHeaderContents />
			<div className="l-main">
				<div className="l-main__inner">
					{/* クイズ内容 */}
					<div className={openQuiz ? "l-main__invisible" : ""}>
						<IntervalQuizContents 
							currentQuestion={currentQuestion}
							playSound={replayFlag}
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
						<IntervalQuizResult 
							handleResetButton={handleResetButton}
							questionResultList={questionResultList}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default IntervalTrainingQuiz;
