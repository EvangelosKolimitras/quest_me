import { ObjectID, Timestamp } from "mongodb";

export interface IMongoUserObject {
    _id: ObjectID
    name: string
    avatarURL: string
    answers: {
        [key: string] : string
    },
    questions: ObjectID[]
}

export interface IMongoQuestionObject {
    _id: ObjectID,
    author: string,
    timestamp: Timestamp,
    optionOne: {
        votes: string[]
        text: string
    },
    optionTwo:{
        votes: string[]
        text: string
    } 
  }

export interface IMongoData {
    users: IMongoUserObject[]      
    questions: IMongoQuestionObject[]
  }