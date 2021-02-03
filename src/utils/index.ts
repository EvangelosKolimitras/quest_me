import { SortQuestions } from '../../common/types';
import { IQuestion, Timestamp } from '../../common/types/types';
import { Questions } from "../../common/types/types";

export const sortQuestions: SortQuestions = (questions: Questions) =>
	questions.sort(
		(questionA: IQuestion, questionB: IQuestion) =>
			questionB.timestamp.valueOf() - questionA.timestamp.valueOf()
	)

// Date formater 
const getDate = (timestamp: Timestamp) => new Date(timestamp).toLocaleDateString("de-DE");
const getTime = (timestamp: Timestamp) => new Date(timestamp).toLocaleTimeString("de-DE");
export const formatDate = (timestamp: Timestamp) => `${getTime(timestamp)}  | ${getDate(timestamp)}`

/* 
	Sentence capitalizer with point free style
*/

// Transforms a string to an array
const toArr = (str: string) => Array.from(str)

// Gets the first letter of the array
const getFirstLetter = (arr: string[]) => arr.slice(0, 1).join("")

// Cappitalizes a letter
const capitalizeFirstLetter = (char: string) => char.toLocaleUpperCase()

// Gets the sentence back by omitting the first char
const getRestLettersOfTheSentece = (sentence: string) => sentence.slice(1)

// Capitalizes the string
export const capsIt = (sentence: string) => capitalizeFirstLetter(getFirstLetter(toArr(sentence))) + getRestLettersOfTheSentece(sentence)

/*
	Name formater
*/

export const formatName = (name: string) => {
	const [firstName, lastName] = name.split(" ");
	return `${firstName[0]}. ${lastName}`
}