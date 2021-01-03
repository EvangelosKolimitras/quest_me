import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './App'
import { initStore } from './store'
import { usersAction } from './actions';
import { users } from './services';
import { BrowserRouter } from 'react-router-dom';

const { receiveUsers } = usersAction();

const store = initStore()
store.dispatch(receiveUsers(users));

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
)
