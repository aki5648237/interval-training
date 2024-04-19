import React, { FC, ReactNode, createContext, useState } from "react";

type Props = {
	children: ReactNode;
};

const defaultValue = {
  test: "",
  setTest: (value: string) => {}
};

export const UserContext = React.createContext(defaultValue);

export const UserProvider : React.FC<Props> = (props) => {
	const { children } = props;

	const [test, setTest] = useState("");
	
	return (
		<UserContext.Provider value={{test, setTest}}>
			{children}
		</UserContext.Provider>
	)
}