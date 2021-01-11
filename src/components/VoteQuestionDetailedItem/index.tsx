import { useState } from "react";
import { IQuestion } from "../../services/declarations";

interface PropsVoteQuestionDetailedItem {
	question: IQuestion
	saveQuestionAnswer: (selectedQuestion?: any) => void
}

export const VoteQuestionDetailedItem: React.FC<PropsVoteQuestionDetailedItem> = ({ question, saveQuestionAnswer }) => {

	const [currentOption, setCurrentOption] = useState("");

	const handleChange = (e: any) => setCurrentOption(e.currentTarget.value)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		saveQuestionAnswer(currentOption);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-check">
					<input
						className="form-check-input"
						type='radio'
						id='optionOne'
						value='optionOne'
						onChange={handleChange}
						name='answer'
						checked={currentOption === 'optionOne' ? true : false}
					>
					</input>
					<label
						className="form-check-label"
						htmlFor='optionOne'>{question.optionOne.text}
					</label>
				</div>
				<div className="form-check">
					<input
						className="form-check-input"
						type='radio'
						id='optionTwo'
						value='optionTwo'
						onChange={handleChange}
						name='answer'
						checked={currentOption === 'optionOne' ? true : false}
					>
					</input>
					<label
						className="form-check-label"
						htmlFor='optionTwo'>{question.optionTwo.text}
					</label>
				</div>
				<button
					className='btn btn-primary'
					type='submit'
				>Submit
            </button>
			</form>
		</>
	)
}