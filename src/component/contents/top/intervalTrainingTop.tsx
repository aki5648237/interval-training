import { useNavigate, } from "react-router-dom"
import AppHeader from '../common/appHeader';

export const IntervalTrainingTop = () => {
	const navigate = useNavigate();

	return (
		<div className="l-wrapper">
     <AppHeader />
     <div className="l-main">
        <div className="l-main__inner">
          <section className="p-top-mv">
            <div className="p-top-mv-inner">
              <h2 className="p-top-mv__title" >インターバルクイズ</h2>
              <div className="p-top-mv__text">  
                <div>二つの音を聞きインターバルを<br />当てるトレーニングです。</div>
                <br />
                <div>問題数は10問です。</div>
              </div>
              <button className="p-top-mv__button-primary" onClick={() => navigate('/IntervalTrainingQuiz')}>クイズスタート</button>
            </div>
          </section>
        </div>
      </div>
    </div>
	)
}
export default IntervalTrainingTop;