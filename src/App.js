
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntervalTraining from "./component/function/top/intervalTraining";
import IntervalTrainingQuiz from "./component/function/quiz/intervalTrainingQuiz";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme"
import { QuizOptionProvider } from "./context/quizOptionContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <QuizOptionProvider>
          <Routes>
            <Route path="/" element={<IntervalTraining/>}/>
            <Route  path="/IntervalTrainingQuiz" element={<IntervalTrainingQuiz />}/>
          </Routes>
        </QuizOptionProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
