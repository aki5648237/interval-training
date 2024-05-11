import { QuestionResult } from "../../quiz/intervalTrainingQuiz"
import { SimpleCalculate } from "../intervalQuizResult"

// 全体の得点計算/間違えた数/一発での正答数/聞いた回数をオブジェクトに格納
export const SimpleResultCalculate = (questionResultList : QuestionResult[]) => {

	// 計算結果格納オブジェクト
	let simpleCalculate : SimpleCalculate

	// ミス時の減点率
	const ONE_MISS = 7/10
	const TWO_MISS = 4/10
	const THREE_MISS = 1/10

	// リプレイ時の減点率
	const ONE_REPLAY = 9/10
	const TWO_REPLAY = 8/10

	// マックス得点
	const MAX_SCORE = 100
	// 問題数(後で関数の引数として渡ってくる)
	const questionNumber = 10
	// 1問のマックス得点
	const questionMaxScore = MAX_SCORE / questionNumber
	// 計算結果初期値
	
	let totalScore = 0
	let totalMissCount = 0
	let perfectQuizNumber = 0
	let overListenCount = 0

	questionResultList.map((item, index) => {
		console.log( 'クイズ' + index +'種類' + item.type +'ミスの数' + item.missCount + 'リプレイの数' + item.replayCount + '正解or不正解' + item.answer)
	})

	// 1問ごとに計算を行う
	questionResultList.map((item) => {
		let questionScore: number = 0
		
		// 正解時
		if (item.answer === 'correct') {
			switch (item.missCount) {
				case 0:
					questionScore = questionMaxScore
					break;
				case 1:
					questionScore = questionMaxScore * ONE_MISS
					break;
				case 2:
					questionScore = questionMaxScore * TWO_MISS
					break;
				default:
					questionScore = questionMaxScore * THREE_MISS
			}
		}
		else {
			questionScore = 0
		}
		// 得点は切り上げとする
		totalScore = totalScore + Math.ceil(questionScore);
		totalMissCount = totalMissCount + item.missCount;
		perfectQuizNumber = item.answer !== '' && item.missCount === 0 ? perfectQuizNumber + 1 : perfectQuizNumber;
		overListenCount = item.replayCount !== 0 ? overListenCount + 1 : overListenCount;
	})

	// 100点時、リプレイ数で減点する
	if (totalScore === MAX_SCORE) {
		totalScore = 0
		questionResultList.map((item) => {
			let questionScore: number = 0
			switch (item.replayCount){
				case 0:
					questionScore = questionMaxScore;
					break;
				case 1:
					questionScore = questionMaxScore * ONE_REPLAY;
					break;
				default:
					questionScore = questionMaxScore * TWO_REPLAY;
			}
			totalScore = totalScore + Math.ceil(questionScore);
		})
	}
	
	// 計算結果を格納
	simpleCalculate={
		totalScore : totalScore,
		totalMissCount : totalMissCount,
		perfectQuizNumber : perfectQuizNumber,
		overListenCount : overListenCount
	}

	console.log('得点' + totalScore + 'ミス数'+ totalMissCount + 'ノーミス数' + perfectQuizNumber + '2回以上聞いた数' + overListenCount)
}


