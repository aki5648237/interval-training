import { Question } from "./getQuizContents";

export const SetQuestionData = (currentQuestion : number, questionList : Question[], setQuestionList : Function, setResultQuiz : Function, setNextQuiz : Function) => {
	// クイズ結果リストの結果を破棄
	const nextList = questionList.map((list) => {
			return {...list, result: ''}
	})
	setQuestionList(nextList);

	if (currentQuestion > 9) {
		// 10問回答後、結果見るボタン表示
		setResultQuiz(true);
		setNextQuiz(false);
	}
}