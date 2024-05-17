import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"
import { QuestionResult } from "../quiz/intervalTrainingQuiz"
import { SimpleResultCalculate } from "./common/simpleResultCalculate"
import { DetailResultCalculate } from "./common/detailResultCalculate"
import { QuizSetting } from "../quiz/intervalTrainingQuiz"
import { useState } from "react"


type Props = {
	handleResetButton : () => void
	questionResultList : QuestionResult[]
	quizSetting : QuizSetting
}

export type SimpleCalculate = {
	totalScore : number
	totalMissCount : number
	perfectQuizNumber : number
	overListenCount : number
 }

 export type DetailCalculate = {
	questionType : string
	questionNumber : number
	totalMissCount : number
	missCount : number
	replayCount : number
	correctRate : string
 }

export const IntervalQuizResult : React.FC<Props> = (
	{handleResetButton, questionResultList, quizSetting} : Props
) => {
	const [showModal, setShowModal] = useState(false);

	// 簡易計算結果取得
	const simpleCalculate = SimpleResultCalculate(questionResultList, quizSetting);
	//  詳細計算結果取得
	const detailCalculate = DetailResultCalculate(questionResultList, quizSetting);

	let quizType = '';
	switch (quizSetting.selectQuizType) {
		case '0':
			quizType = '3'
			break;
		case '1':
			quizType = '5'
			break;
		case '2':
			quizType = '7'
			break;
	}

	// 詳細結果ダイアログ表示
	const openDetailResult = () => {
		setShowModal(true);
	}
	const closeDetailResult = () => {
		setShowModal(false);
	}

	return (
		<IntervalQuizResultContents 
			handleResetButton={handleResetButton}
			simpleCalculate={simpleCalculate}
			detailCalculate={detailCalculate}
			openDetailResult={openDetailResult}
			closeDetailResult={closeDetailResult}
			showModal={showModal}
			quizSetting={quizSetting}
			quizType={quizType}
		/>
	)
}