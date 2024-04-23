export type Question = {
  answerText: string;
	value: number;
	result: string;
	missCount: number;
}

export const GetQuizContent = () => {

	const questionType : number = 3;
	const questions : Question[] =[];

	switch (questionType) {
		case 3 :
			questions.push({answerText: 'Major 3rd', value: 0, result: '', missCount: 0})
			questions.push({answerText: 'Perfect 5th', value: 1, result: '', missCount: 0})
			questions.push({answerText: 'Octave', value: 2, result: '', missCount: 0})
	}


	return questions;
}