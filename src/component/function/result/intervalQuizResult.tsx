import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"
import { QuestionResult } from "../quiz/intervalTrainingQuiz"
import { SimpleResultCalculate } from "./common/simpleResultCalculate"
import { DetailResultCalculate } from "./common/detailResultCalculate"
import { useState } from "react"


type Props = {
	handleResetButton : () => void
	questionResultList : QuestionResult[]
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
	correctRate : number
 }

export const IntervalQuizResult : React.FC<Props> = (
	{handleResetButton, questionResultList} : Props
) => {
	const [showModal, setShowModal] = useState(false);

	// 簡易計算結果取得
	const simpleCalculate = SimpleResultCalculate(questionResultList);
	//  詳細計算結果取得
	const detailCalculate = DetailResultCalculate(questionResultList);

	// 詳細結果ダイアログ表示
	const openDetailResult = () => {
		setShowModal(true);
		console.log(showModal)
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
		/>
	)
}