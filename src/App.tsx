import { useSelector } from "react-redux"
import { IUsers } from "./services/declarations";

interface DefaultRootState {
	users: IUsers
}

export const App: React.FC = () => {
	const users = useSelector((state: DefaultRootState) => state)

	return (
		<div>
			<h1>Quest me</h1>
		</div>
	)
}

