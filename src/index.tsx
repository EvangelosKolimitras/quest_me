import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './App'
import { initStore } from './store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={initStore()}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
)
