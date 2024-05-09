import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"
import { QuestionResult } from "../quiz/intervalTrainingQuiz"

type Props = {
	handleResetButton : () => void
	questionResultList : QuestionResult[]
}

export const IntervalQuizResult : React.FC<Props> = (
	{handleResetButton, questionResultList} : Props
) => {



	return (
		<IntervalQuizResultContents 
			handleResetButton={handleResetButton}
		/>
	)
}