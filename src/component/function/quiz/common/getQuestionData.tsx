export type Question = {
  answerText: string;
	value: number;
	result: string;
}

export const GetQuestionData = () => {

	const questionType : number = 3;
	const questions : Question[] =[];

	switch (questionType) {
		case 3 :
			questions.push({answerText: 'Major 3rd', value: 0, result: ''})
			questions.push({answerText: 'Perfect 5th', value: 1, result: ''})
			questions.push({answerText: 'Octave', value: 2, result: ''})
	}


	return questions;
}