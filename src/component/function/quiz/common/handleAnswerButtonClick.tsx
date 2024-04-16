import { QuestionResult } from "../intervalTrainingQuiz";
import {  useDispatch } from "react-redux";
import { useSelector } from "../../../../stores";
import { setAnswer } from "../../../../stores/answer";


export const HandleAnswerButtonClick = (resultList: QuestionResult[], answerText: string, value: number, rand : number): QuestionResult[] => {

	const nextList = resultList.map((list) => {
		if (list.resultText === answerText) {
			if (rand === value) {
				// setAnswer('correct');
				
				// setNextText('次へ');
				return {...list, result:'correct'}
			}
			else {
				return {...list, result:'inCorrect', missCount: list.missCount + 1}
			}
		}
		return list;
	})

	return nextList;

}
export default HandleAnswerButtonClick;