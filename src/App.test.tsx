import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { history } from 'src/configStore';
import { App } from './App';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App history={history} />, div);
	ReactDOM.unmountComponentAtNode(div);
});
