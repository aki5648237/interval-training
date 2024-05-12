import { DetailCalculate } from "../intervalQuizResult"
import { QuestionResult } from "../../quiz/intervalTrainingQuiz"

// 問題の種類ごとの数/問題ごとの間違えた数/リプレイ数/正答割合%をオブジェクトに格納
export const DetailResultCalculate = (questionResultList : QuestionResult[]) => {

	// 計算結果格納リスト
	let detailCalculate : DetailCalculate[] = []
	detailCalculate.push({questionType : 'Major 3rd', questionNumber : 0, totalMissCount : 0, missCount : 0, replayCount : 0, correctRate : 0})
	detailCalculate.push({questionType : 'Perfect 5th', questionNumber : 0, totalMissCount : 0, missCount : 0, replayCount : 0, correctRate : 0})
	detailCalculate.push({questionType : 'Octave', questionNumber : 0, totalMissCount : 0, missCount : 0, replayCount : 0, correctRate : 0})

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
			missCount : item.missCount !== 0 ? missCount = missCount + 1 : missCount,
			replayCount : replayCount + item.replayCount}
	})

	// 正答率を計算
	detailCalculate.map((item, index) => {
		let correctRate = Math.ceil( ((item.questionNumber - item.missCount) / item.questionNumber) * 100);
		detailCalculate[index] = {...detailCalculate[index], correctRate : correctRate}
	})

	questionResultList.map((item) => {
		console.log('クイズタイプ' + item.type + 'ミス数' + item.missCount + 'リプレイ数' + item.replayCount)
	})
	detailCalculate.map((item) => {
		console.log('正答数' + (item.questionNumber - item.missCount) + 'クイズ数' + item.questionNumber)
		console.log('タイプ' + item.questionType + 'クイズ数' + item.questionNumber + '合計ミス' + item.totalMissCount + 'ミス数' + item.missCount + 'リプレイ数' + item.replayCount + '正答率' + item.correctRate)
	})
	
	return detailCalculate;

}