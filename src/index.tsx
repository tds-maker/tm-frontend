import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { Notify } from './components';
import registerServiceWorker from './registerServiceWorker';

import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <Notify />
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
