import { useNavigate, } from "react-router-dom"
import AppHeaderContents from '../common/appHeaderContents';
import { QuizNumber } from "../../function/top/intervalTraining";
import { QuizType } from "../../function/top/intervalTraining";

type Props = {
	quizNumber : QuizNumber[]
  quizType : QuizType[]
  selectQuizNumber : number
  selectQuizType : string
  handleSelectNumberChange : (event : React.ChangeEvent<HTMLSelectElement>) => void
  handleSelectTypeChange : (event : React.ChangeEvent<HTMLSelectElement>) => void
}

export const IntervalTrainingTopContents : React.FC<Props> = ({quizNumber, quizType, selectQuizNumber, selectQuizType, handleSelectNumberChange, handleSelectTypeChange} : Props) => {
	const navigate = useNavigate();

	return (
		<div className="l-wrapper">
     <AppHeaderContents />
     <div className="l-main">
        <div className="l-main__inner">
          <section className="p-top-mv">
            <div className="p-top-mv-inner">
              <h2 className="p-top-mv__title" >インターバルクイズ</h2>
              <div className="p-top-mv__text-box">  
                <div className="p-top-mv__text">二つの音を聞きインターバルを<br />当てるトレーニングです。</div>
                <br />
                <div className="p-top-mv__number-box">
                  <div>問題数の選択 : </div>
                  <select className="p-top-mv__number-select" value={selectQuizNumber} defaultValue={selectQuizNumber} onChange={(e) => {handleSelectNumberChange(e)}}>
                    {quizNumber.map((item) => (
                      <option key={item.option} value={item.quizNumber}>
                        {item.quizNumber}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="p-top-mv__type-box">
                  <div>種類の選択 : </div>
                  <select className="p-top-mv__type-select" value={selectQuizType} defaultValue={selectQuizType} onChange={(e) => {handleSelectTypeChange(e)}}>
                    {quizType.map((item) => (
                      <option key={item.option} value={item.quizTypeValue}>
                        {item.quizType}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="p-top-mv__button-primary" onClick={() => navigate('/IntervalTrainingQuiz',{state: {selectQuizNumber, selectQuizType}})}>クイズスタート</button>
            </div>
          </section>
        </div>
      </div>
    </div>
	)
}
export default IntervalTrainingTopContents;