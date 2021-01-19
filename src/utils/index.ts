import { IQuestion } from "../services/declarations";

export const sortQuestions = (arr: IQuestion[]) => arr.sort((a: IQuestion, b: IQuestion) => b.timestamp - a.timestamp)

// Date formater 
const getDate = (timestamp: number) => new Date(timestamp).toLocaleDateString("de-DE");
const getTime = (timestamp: number) => new Date(timestamp).toLocaleTimeString("de-DE");
export const formatDate = (timestamp: number) => `${getTime(timestamp)}  | ${getDate(timestamp)}`

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

