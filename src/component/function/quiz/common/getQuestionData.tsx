import { QuizSetting } from "../intervalTrainingQuiz";

export type Question = {
  answerText: string;
	value: number;
	result: string;
}

const MAJOR_2ND = 'Major 2nd';
const MAJOR_3RD = 'Major 3rd';
const PERFECT_4TH = 'Perfect 4th';
const PERFECT_5TH = 'Perfect 5th';
const MAJOR_6TH = 'Major 6th';
const MAJOR_7TH = 'Major 7th';
const OCTAVE = 'Octave';

export const TYPE_0 = [MAJOR_3RD, PERFECT_5TH, OCTAVE];
export const TYPE_1 = [MAJOR_2ND, MAJOR_3RD, PERFECT_4TH, PERFECT_5TH, OCTAVE];
export const TYPE_2 = [MAJOR_2ND, MAJOR_3RD, PERFECT_4TH, PERFECT_5TH, MAJOR_6TH, MAJOR_7TH, OCTAVE];


export const GetQuestionData = (quizSetting : QuizSetting) => {

	const questions : Question[] =[];

	switch (quizSetting.selectQuizType) {
		case '0':
			TYPE_0.map((item, index) => {
				questions.push({answerText : item, value : index, result : ''})
			})
			break;
		case '1':
			TYPE_1.map((item, index) => {
				questions.push({answerText : item, value : index, result : ''})
			})
			break;
		case '2':
			TYPE_2.map((item, index) => {
				questions.push({answerText : item, value : index, result : ''})
			})
			break;
	}


	return questions;
}