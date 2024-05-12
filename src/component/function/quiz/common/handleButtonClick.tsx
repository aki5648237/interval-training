import { Question } from "./getQuestionData";

// 選択肢押下時の処理
export const HandleAnswerButtonClick = (questionList : Question[], value: number, rand : number, setAnswer : Function, setNextText: Function, missCount : number,  setMissCount : Function) : Question[] => {

	const nextList = questionList.map((list) => {
		if (value === list.value) {
			if (rand === value) {
				setAnswer('correct');
				setNextText('次へ');
				return {...list, result:'correct'};
				// 不正解時
			} else {
				setAnswer('incorrect');
				setMissCount(missCount + 1)
				return {...list, result:'inCorrect'};
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
export const HandlePlayButtonClick = (my_audio: HTMLAudioElement, replayFlag : boolean, setReplayFlag : Function, replayCount : number, setReplayCount : Function) => {
	if (my_audio !== undefined) {
		my_audio.currentTime = 0;
		my_audio.play();
		if (replayFlag === true) {
			setReplayCount(replayCount + 1)
		}
	}
	if (replayFlag === false) {
		setReplayFlag(true);
	}
}

// 結果を表示
export const HandleNextDisplayButtonClick = (currentQuestion: number, setCurrentQuestion : Function, setAnswer : Function, setNextText : Function, setPlaySound : Function, setListenCount: Function, setMissCount: Function) => {
	setCurrentQuestion(currentQuestion + 1);
	// 選択肢のボタンのcssを破棄
	setAnswer('');
	setNextText('スキップ');
	setPlaySound(false);
	setListenCount(0);
	setMissCount(0);
}

// 結果を表示
export const HandleResultDisplayButton = (setOpenQuiz : Function) => {
	setOpenQuiz(false);
}

// stateの破棄
export const HandleResetButton = (setCurrentQuestion : Function, setOpenQuiz : Function, setNextQuiz : Function, setResultQuiz : Function, setAnswer : Function) => {
	// setCurrentQuestion(1);
	// setOpenQuiz(true);
	// setNextQuiz(true);
	// setResultQuiz(false);
	// setAnswer('');
	window.location.reload()
}