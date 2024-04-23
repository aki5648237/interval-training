import { useState } from "react";

export const useAnswer = () => {
	const  [answer, setAnswer] = useState<string>("");

	return {answer, setAnswer};
}