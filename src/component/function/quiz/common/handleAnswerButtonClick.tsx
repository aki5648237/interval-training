import { Question, QuestionResult } from "../intervalTrainingQuiz";
import {  useDispatch } from "react-redux";
import { useSelector } from "../../../../stores";
import { setAnswer } from "../../../../stores/answer";


export const HandleAnswerButtonClick = (questionList : Question[], value: number, rand : number) => {

	const nextList: Question[] = [
		{
			answerOptions: questionList[0].answerOptions.map((list, index) => {
				if (value === list.value) {
					if (rand === value && value === list.value) {
						// setAnswer('correct');
						// setNextText('次へ');
						return {...list, result:'correct', missCount: list.missCount};
					} else {
						return {...list, result:'inCorrect', missCount: list.missCount + 1};
					}
				}
				else {
					return {...list}
				}
			})
		}
	];

	return nextList;

}
export default HandleAnswerButtonClick;