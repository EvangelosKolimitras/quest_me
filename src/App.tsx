import React from "react";
import { useSelector } from "react-redux"
import { IUsers } from "./services/declarations";

interface DefaultRootState {
	users: IUsers
}

export const App: React.FC = React.memo(() => {
	const users = useSelector((state: DefaultRootState) => state.users)
	return (
		<div>
			<h1>Quest me</h1>
		</div>
	)
})

