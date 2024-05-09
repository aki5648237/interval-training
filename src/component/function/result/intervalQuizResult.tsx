import { IntervalQuizResultContents } from "../../contents/result/intervalQuizResultContents"

type Props = {
	handleResetButton : () => void
}





export const IntervalQuizResult : React.FC<Props> = (
	{handleResetButton} : Props
) => {

	return (
		<IntervalQuizResultContents 
			handleResetButton={handleResetButton}
		/>
	)
}