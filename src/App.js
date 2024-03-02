
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntervalTraining from "./component/intervalTraining";
import IntervalTrainingQuiz from "./component/intervalTrainingQuiz";


function App() {
  return (
    <BrowserRouter>
      <Routes>
				<Route path="/" element={<IntervalTraining/>}/>
				<Route path="/intervalTrainingQuiz" element={<IntervalTrainingQuiz/>}/>
       </Routes>
		</BrowserRouter>
  );
}

export default App;
