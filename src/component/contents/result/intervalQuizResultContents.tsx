import { useNavigate } from "react-router-dom"
import React from 'react';
import { SimpleCalculate } from "../../function/result/intervalQuizResult";
import { DetailCalculate } from "../../function/result/intervalQuizResult";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Dialog from "@mui/material/Dialog";
import CloseIcon from '@mui/icons-material/Close';
import { QuizSetting } from "../../function/quiz/intervalTrainingQuiz";

type Props = {
	handleResetButton : () => void
	simpleCalculate : SimpleCalculate
	detailCalculate : DetailCalculate[]
	openDetailResult : Function
	closeDetailResult : Function
	showModal : boolean
	quizSetting : QuizSetting
	quizType : string
}

export const IntervalQuizResultContents : React.FC<Props> = (
	{handleResetButton, simpleCalculate, detailCalculate, openDetailResult, closeDetailResult, showModal, quizSetting, quizType} : Props
) => {
	const navigate = useNavigate();
	return (
		<div>
			<section className="p-result-mv">
				<div className="p-result-mv-inner">
					<h2 className="p-result-mv__title">クイズ結果</h2>
					<div className="p-result-mv__result-box">
						<div className="p-result-mv__result-inner-box">
							<div className="p-result-mv__total-score">点数 {simpleCalculate.totalScore}/100</div>
							
							<div className="p-result-mv__text-box">
								<div>
									<span>間違えた回数 : </span>
									<span className="p-result-mv__result-value">{simpleCalculate.totalMissCount}</span>
								</div>
								<div>
									<span>一発での正答数 : </span>
									<span className="p-result-mv__result-value">{simpleCalculate.perfectQuizNumber}/{quizSetting.selectQuizNumber}</span>
								</div>
								<div>
									<span>リプレイ数 : </span>
									<span className="p-result-mv__result-value">{simpleCalculate.overListenCount}</span>
								</div>
								<div className="p-result-mv__quiz-setting">
									<span>問題数 : </span>
									<span>{quizSetting.selectQuizNumber} </span>
									<span>種類数 : </span>
									<span>{quizType}</span>
							</div>
							</div>
							<div className="p-result-mv__detail-link">
								<div>詳細な結果はこちら</div>
								<button onClick={()=> {openDetailResult()}}>
									<OpenInNewIcon className="p-result-mv__new-icon"/>
								</button>	
							</div>
						</div>
					</div>
					<div className="p-result-mv__button-box">
						<button className="p-result-mv__button-top" onClick={() => navigate('/')} >Top</button>
						<button className="p-result-mv__button-again" onClick={() => handleResetButton()}>もう一度</button>
					</div>
				</div>
			</section>

			<section className="p-result-detail">
				<Dialog
					fullScreen
					open={showModal}
					>
						<div className="p-result-detail-inner">
							<div className="p-result-detail__title-box">
								<button className="p-result-detail__cross-icon" onClick={() => {closeDetailResult()}}>
									<CloseIcon sx={{fontSize : '32px'}}/>
								</button>
								<div className="p-result-detail__title">詳細なクイズ結果</div>
								<div className="p-result-detail__result-box">
								<table className="p-result-detail__result-table">
									<thead>
										<tr>
											<th>種類</th>
											<th>ミス数</th>
											<th>リプレイ数</th>
											<th>正答率</th>
										</tr>
									</thead>
									<tbody>
										{detailCalculate.map((item) => (
										<tr>
											{/* ここに詳細なクイズ結果の表示を追加 */}
											<td>{item.questionType}</td>
											<td>{item.missCount}/{item.questionNumber}</td>
											<td>{item.replayCount}</td>
											<td className="p-result-detail__correct-rate">{item.correctRate}%</td>
										</tr>
										))}
									</tbody>
								</table>
								</div>
							</div>
						</div>
				</Dialog>
			</section>
		</div>
	)
}