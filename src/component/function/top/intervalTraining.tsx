import { useEffect, useState } from "react";
import IntervalTrainingTopContents from "../../contents/top/intervalTrainingTopContents";

export type QuizNumber = {
  option : string
  quizNumber : number
}
export type QuizType = {
  option : string
  quizType : string
  quizTypeValue : string
}

export const IntervalTraining = () => {

  // 問題数の定義
  const quizNumber : QuizNumber[] = [
    {option : 'option1', quizNumber : 5},
    {option : 'option2', quizNumber : 10},
    {option : 'option3', quizNumber : 20},
  ]
  // 種類の定義
  const quizType : QuizType[] =[
    {option :'option1', quizType : '3種類', quizTypeValue : '0' },
    {option :'option1', quizType : '5種類', quizTypeValue : '1' },
    {option :'option1', quizType : '7種類', quizTypeValue : '2' }
  ]

  const handleSelectNumberChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectQuizNumber(Number(event.target.value));
  }
  const handleSelectTypeChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
    setSelectQuizType(event.target.value)
  }

  // 問題数
  const [selectQuizNumber, setSelectQuizNumber] = useState<number>(0);
  // 種類
  const [selectQuizType, setSelectQuizType] = useState<string>('');

  useEffect(() => {
    console.log(selectQuizNumber)

  }, [selectQuizNumber])

  return (
    <IntervalTrainingTopContents 
      quizNumber={quizNumber}
      quizType={quizType}
      selectQuizNumber={selectQuizNumber}
      selectQuizType={selectQuizType}
      handleSelectNumberChange={handleSelectNumberChange}
      handleSelectTypeChange={handleSelectTypeChange}
    />
)
}
export default IntervalTraining;