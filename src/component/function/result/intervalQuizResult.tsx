import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"
import { QuestionResult } from "../quiz/intervalTrainingQuiz"
import { SimpleResultCalculate } from "./common/simpleResultCalculate"
import { DetailResultCalculate } from "./common/detailResultCalculate"

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

	// 簡易計算結果取得
	const simpleCalculate = SimpleResultCalculate(questionResultList);
	//  詳細計算結果取得
	const detailCalculate = DetailResultCalculate(questionResultList);

	return (
		<IntervalQuizResultContents 
			handleResetButton={handleResetButton}
			simpleCalculate={simpleCalculate}
			detailCalculate={detailCalculate}
		/>
	)
}