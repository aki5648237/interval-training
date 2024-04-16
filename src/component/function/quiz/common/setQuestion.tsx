import major3rd from '../../../../sound/major3rd.mp3';
import perfect5th from '../../../../sound/perfect5th.mp3';
import octabe from '../../../../sound/octave.mp3';

let my_audio: HTMLAudioElement;

export const SetQuestion = (rand: number) => {
	
	switch (rand) {
		case 0:
			my_audio = new Audio(major3rd);
			break;
		case 1:
			my_audio = new Audio(perfect5th);
			break;
		case 2:
			my_audio = new Audio(octabe);
			break;
	}
	
	return my_audio;
}
export default SetQuestion;