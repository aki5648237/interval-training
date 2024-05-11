import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"
import { QuestionResult } from "../quiz/intervalTrainingQuiz"
import { SimpleResultCalculate } from "./common/simpleResultCalculate"

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

export const IntervalQuizResult : React.FC<Props> = (
	{handleResetButton, questionResultList} : Props
) => {

	// 計算結果格納オブジェクト
	let simpleCalculate : SimpleCalculate

		SimpleResultCalculate(questionResultList);
	return (
		<IntervalQuizResultContents 
			handleResetButton={handleResetButton}
		/>
	)
}