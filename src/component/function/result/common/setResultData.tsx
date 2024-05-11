import { QuestionResult } from "../../quiz/intervalTrainingQuiz"

// 1問ごとのクイズ結果を格納
export const SetResultData = (questionResultList: QuestionResult[], setQuestionResultList : Function, rand : number, answer : string, missCount : number, replayCount : number) => {

	const newList = [...questionResultList];
  // 新しい要素を追加
  newList.push({ type: rand, answer: answer, missCount: missCount, replayCount: replayCount });
  // 新しい配列を設定
  setQuestionResultList(newList);
}