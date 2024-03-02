import { useNavigate } from "react-router-dom"

export const IntervalTraining = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>音楽トレーニング.jp</h1>
      <div>君の音楽戦闘力をあげよう</div>
      <div>インターバルクイズ</div>
      <div>このクイズは、二つの音を聞き、そのインターバルを(major 3rd、 perfect 5th、 octave)の中から当てるトレーニングです。</div>
      <div>問題数は10問です。</div>

      <button onClick={() => navigate('/intervalTrainingQuiz')}>クイズスタート</button>

    </div>
)
}

export default IntervalTraining;