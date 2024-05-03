
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntervalTraining from "./component/function/top/intervalTraining";
import IntervalTrainingQuiz from "./component/function/quiz/intervalTrainingQuiz";
import { QuizOptionProvider } from "./context/quizOptionContext";

function App() {
  return (
    <BrowserRouter>
      <QuizOptionProvider>
        <Routes>
          <Route path="/" element={<IntervalTraining/>}/>
          <Route  path="/IntervalTrainingQuiz" element={<IntervalTrainingQuiz />}/>
        </Routes>
      </QuizOptionProvider>
    </BrowserRouter>
  );
}
export default App;
