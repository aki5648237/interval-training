import { Question } from "../intervalTrainingQuiz";

export const HandleAnswerButtonClick = (questionList : Question[], value: number, rand : number) : Question[] => {

	const nextList: Question[] = [
		{
			answerOptions: questionList[0].answerOptions.map((list) => {
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