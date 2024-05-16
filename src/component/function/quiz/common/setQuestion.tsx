import major2nd from '../../../../sound/major2nd.mp3';
import major3rd from '../../../../sound/major3rd.mp3';
import perfect4th from '../../../../sound/perfect4th.mp3';
import perfect5th from '../../../../sound/perfect5th.mp3';
import major6 from '../../../../sound/major6.mp3';
import major7 from '../../../../sound/major7.mp3';
import octave from '../../../../sound/octave.mp3';

import { QuizSetting } from '../intervalTrainingQuiz';

let my_audio: HTMLAudioElement;

export const SetQuestion = (quizSetting : QuizSetting, rand: number) => {
	
	if (quizSetting.selectQuizType === '0') {
		switch (rand) {
			case 0:
				my_audio = new Audio(major3rd);
				break;
			case 1:
				my_audio = new Audio(perfect5th);
				break;
			case 2:
				my_audio = new Audio(octave);
				break;
		}
	} else if (quizSetting.selectQuizType === '1') {
		switch (rand) {
			case 0:
				my_audio = new Audio(major2nd);
				break;
			case 1:
				my_audio = new Audio(major3rd);
				break;
			case 2:
				my_audio = new Audio(perfect4th);
				break;
			case 3:
				my_audio = new Audio(perfect5th);
				break;
			case 4:
				my_audio = new Audio(octave);
				break;
		}
	} else {
		switch (rand) {
			case 0:
				my_audio = new Audio(major2nd);
				break;
			case 1:
				my_audio = new Audio(major3rd);
				break;
			case 2:
				my_audio = new Audio(perfect4th);
				break;
			case 3:
				my_audio = new Audio(perfect5th);
				break;
			case 4:
				my_audio = new Audio(major6);
				break;
			case 5:
				my_audio = new Audio(major7);
				break;
			case 6:
				my_audio = new Audio(octave);
				break;
	}
}
	return my_audio;
}
export default SetQuestion;