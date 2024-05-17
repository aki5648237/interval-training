import { DetailCalculate } from "../intervalQuizResult"
import { QuestionResult } from "../../quiz/intervalTrainingQuiz"
import { QuizSetting } from "../../quiz/intervalTrainingQuiz"
import { TYPE_0 } from "../../quiz/common/getQuestionData"
import { TYPE_1 } from "../../quiz/common/getQuestionData"
import { TYPE_2 } from "../../quiz/common/getQuestionData"

// 問題の種類ごとの数/問題ごとの間違えた数/リプレイ数/正答割合%をオブジェクトに格納
export const DetailResultCalculate = (questionResultList : QuestionResult[], quizSetting : QuizSetting) => {

	// 計算結果格納リスト
	let detailCalculate : DetailCalculate[] = []
	let type : string[]

	switch (quizSetting.selectQuizType) {
		case '0':
			type = TYPE_0
			break;
		case '1':
			type = TYPE_1
			break;
		case '2':
			type = TYPE_2
			break;
	}
	type!.map((item) => {
		detailCalculate.push({questionType : item, questionNumber : 0, totalMissCount : 0, missCount : 0, replayCount : 0, correctRate : '-'})
	})
	
	// 正答率以外の値を計算
	questionResultList.map((item) => {
		let questionNumber = detailCalculate[item.type].questionNumber
		let totalMissCount = detailCalculate[item.type].totalMissCount
		let missCount = detailCalculate[item.type].missCount
		let replayCount = detailCalculate[item.type].replayCount

		detailCalculate[item.type] = {
			...detailCalculate[item.type], 
			questionNumber : questionNumber = questionNumber + 1,
			totalMissCount : totalMissCount + item.missCount,
			missCount : item.missCount !== 0 || item.answer === '' ? missCount = missCount + 1 : missCount,
			replayCount : replayCount + item.replayCount
		}
	})

	// 正答率を計算
	detailCalculate.map((item, index) => {
		let correctRate = '-'
		if (item.questionNumber !== 0) {
			correctRate =  String(Math.ceil( ((item.questionNumber - item.missCount) / item.questionNumber) * 100));
		}
		detailCalculate[index] = {...detailCalculate[index], correctRate : correctRate}
	})
	
	return detailCalculate;

}