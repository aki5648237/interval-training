import { Question } from "./getQuizContents";

// 選択肢押下時の処理
export const HandleAnswerButtonClick = (questionList : Question[], value: number, rand : number, setAnswer : Function, setNextText: Function) : Question[] => {

	const nextList = questionList.map((list) => {
		if (value === list.value) {
			if (rand === value && value === list.value) {
				setAnswer('correct');
				setNextText('次へ');
				return {...list, result:'correct', missCount: list.missCount};
			} else {
				return {...list, result:'inCorrect', missCount: list.missCount + 1};
			}
		}
		else {
			return {...list}
		}
	})
	
	return nextList;
}
export default HandleAnswerButtonClick;

// ボタン押下時音を鳴らす
export const HandlePlayButtonClick = (my_audio: HTMLAudioElement, playSound : boolean, setPlaySound : Function) => {
	if (my_audio !== undefined) {
		my_audio.currentTime = 0;
		my_audio.play();
	}
		
	if (playSound === false) {
		setPlaySound(true);
	}
}

// 結果を表示
export const HandleNextDisplayButtonClick = (currentQuestion: number, setCurrentQuestion : Function, setAnswer : Function, setNextText : Function, setPlaySound : Function) => {
	setCurrentQuestion(currentQuestion + 1);
	// 選択肢のボタンのcssを破棄
	setAnswer('');
	setNextText('スキップ');
	setPlaySound(false);
}

// 結果を表示
export const HandleResultDisplayButton = (setOpenQuiz : Function, setOpenResult: Function) => {
	setOpenQuiz(true);
	setOpenResult(false);
}

// stateの破棄
export const HandleResetButton = (setCurrentQuestion : Function, setOpenQuiz : Function, setOpenResult : Function, setNextQuiz : Function, setResultQuiz : Function, setAnswer : Function) => {
	setCurrentQuestion(1);
	// setListenCount(0);
	// setMissCount(0);
	setOpenQuiz(false);
	setOpenResult(true);
	setNextQuiz(true);
	setResultQuiz(false);
	setAnswer('');
}