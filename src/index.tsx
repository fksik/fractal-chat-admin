import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { App } from './App';
import configureStore, { history } from './configStore';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

function render() {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>
				<App history={history} />
			</Provider>
		</AppContainer>,
		document.getElementById('root') as HTMLElement
	);
};

render();

if (module.hot) {
	// Reload components
	module.hot.accept('./App', () => {
		render();
	});
}

registerServiceWorker();
