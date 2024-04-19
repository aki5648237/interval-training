
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntervalTraining from "./component/function/top/intervalTraining";
import IntervalTrainingQuiz from "./component/function/quiz/intervalTrainingQuiz";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme"
import { useState } from "react";
import React from "react";
import { UserProvider } from "./context/context";

export const ChangeContext = React.createContext()

function App() {
  const [changeContext, setChangeContext] = useState(true)
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
      <UserProvider>
        <ChangeContext.Provider value={{changeContext, setChangeContext}}>
          <Routes>
              <Route path="/" element={<IntervalTraining/>}/>
              <Route  path="/IntervalTrainingQuiz" element={<IntervalTrainingQuiz />}/>
          </Routes>
          </ChangeContext.Provider>
        </UserProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
