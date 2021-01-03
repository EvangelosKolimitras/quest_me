import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './app'
import { initStore } from './store'


const store = initStore()

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
