import { useNavigate } from "react-router-dom"
import React from 'react';
import { SimpleCalculate } from "../../function/result/intervalQuizResult";
import { DetailCalculate } from "../../function/result/intervalQuizResult";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type Props = {
	handleResetButton : () => void
	simpleCalculate : SimpleCalculate
	detailCalculate : DetailCalculate[]
	openDetailResult : Function
	closeDetailResult : Function
	showModal : boolean
}

export const IntervalQuizResultContents : React.FC<Props> = (
	{handleResetButton, simpleCalculate, detailCalculate, openDetailResult, closeDetailResult, showModal} : Props
) => {
	const navigate = useNavigate();
	return (
		<div>
			<section className="p-result-mv">
				<div className="p-result-mv-inner">
					<h2 className="p-result-mv__title">クイズの結果</h2>
					<div className="p-result-mv__result-box">
						<div>
							<div className="p-result-mv__total-score">得点 {simpleCalculate.totalScore}/100</div>
							<ul className="p-result-mv__list-text">
								<li>間違えた回数 {simpleCalculate.totalMissCount}</li>
								<li>一発での正答数 {simpleCalculate.perfectQuizNumber}/10</li>
								<li>リプレイ数 {simpleCalculate.overListenCount}</li>
							</ul>
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
			{showModal && (
				<section className="p-result-detail">
				<dialog>
					<div>詳細なクイズ結果</div>
					<div>詳細なクイズ結果</div>
					<div>詳細なクイズ結果</div>
					<div>詳細なクイズ結果</div>
				</dialog>
			</section>
			)}
		</div>
		
	)
}