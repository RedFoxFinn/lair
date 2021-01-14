import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Lair from './lair.jsx';
import reportWebVitals from './reportWebVitals';
import {ViewportProvider} from './logic/viewportHook';
import state from './logic/redux/state';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={state}>
      <ViewportProvider>
        <Lair id='rff'/>
      </ViewportProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
