import { Question } from "./getQuestionData";
import { QuizSetting } from "../intervalTrainingQuiz";

export const SetQuestionData = (currentQuestion : number, questionList : Question[], setQuestionList : Function, setResultQuiz : Function, setNextQuiz : Function, quizSetting : QuizSetting) => {
	// クイズ結果リストの結果を破棄
	const nextList = questionList.map((list) => {
			return {...list, result: ''}
	})
	setQuestionList(nextList);

	if (currentQuestion >= quizSetting.selectQuizNumber) {
		// 回答後、結果見るボタン表示
		setResultQuiz(true);
		setNextQuiz(false);
	}
}