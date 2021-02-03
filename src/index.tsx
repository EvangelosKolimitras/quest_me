import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
import { App } from './App'
import { initStore } from './store'
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Theme } from './Themes';
import "./index.module.css"
ReactDOM.render(
	<BrowserRouter>
		<Theme>
			<Provider store={initStore()}>
				<App />
			</Provider>
		</Theme>
	</BrowserRouter>,
	document.getElementById("root")
)
