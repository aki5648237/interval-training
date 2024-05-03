import { useNavigate } from "react-router-dom"
import React from 'react';

type Props = {
	handleResetButton : () => void
}

export const IntervalQuizResultContents : React.FC<Props> = (
	{handleResetButton} : Props
) => {
	const navigate = useNavigate();
	return (
		<section className="p-result-mv">
			<div className="p-result-mv-inner">
				<h2 className="p-result-mv__title">クイズの結果</h2>
				<div className="p-result-mv__result-box">
					<div>
						<ul>
							<li>得点</li>
							<li>間違えた回数</li>
							<li></li>
						</ul>
					</div>
				</div>
				<div className="p-result-mv__button-box">
					<button className="p-result-mv__button-top" onClick={() => navigate('/')} >Top</button>
					<button className="p-result-mv__button-again" onClick={() => handleResetButton()}>もう一度</button>
				</div>
			</div>
		</section>
	)
}