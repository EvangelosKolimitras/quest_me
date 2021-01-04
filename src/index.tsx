import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './App'
import { initStore } from './store'
import { usersAction, questionsAction, authedUserAction } from './actions';
import { users } from './services';
import { BrowserRouter } from 'react-router-dom';

import { questions } from './services/questions';

const store = initStore()
store.dispatch(usersAction().receiveUsers(users));
store.dispatch(questionsAction().receiveQuestions(questions));
store.dispatch(authedUserAction().setAuthedUser(users["evangeloskolimitras"]));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
)
