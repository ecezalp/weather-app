import * as React from 'react';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import '../styles/main.scss';

import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';


export default function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  return <Provider store={store}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>;
}

