import React, { ReactNode, useState } from "react";

type Props = {
	children: ReactNode;
};

const defaultAnswer = {
  answer: "",
  setAnswer: (value: string) => {}
};

export const AnswerContext = React.createContext(defaultAnswer);

export const QuizOptionProvider = (props : Props) => {
	const { children } = props;

	const [answer, setAnswer] = useState("");
	
	return (
		<AnswerContext.Provider value={{answer, setAnswer}}>
			{children}
		</AnswerContext.Provider>
	)
}