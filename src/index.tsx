import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './App'
import { initStore } from './store'
import { usersAction } from './actions';
import { users } from './services';

const { receiveUsers } = usersAction();

const store = initStore()
store.dispatch(receiveUsers(users));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
