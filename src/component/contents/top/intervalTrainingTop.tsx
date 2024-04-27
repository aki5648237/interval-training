import { useNavigate, } from "react-router-dom"
import { Typography, Button, Box} from '@mui/material/';
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
                <div>このクイズは、二つの音を聞き<br />インターバルを当てるトレーニングです。</div>
                <br />
                <div>問題数は10問です。</div>
              </div>
              <Button className="main-button" onClick={() => navigate('/IntervalTrainingQuiz')}>クイズスタート</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
	)
}
export default IntervalTrainingTop;