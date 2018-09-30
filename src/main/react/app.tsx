import * as React from 'react';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
//
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";

import "../styles/main.scss";

import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";


export default function App() {

  const store = createStore(rootReducer, applyMiddleware(thunk));

  // const lightMuiTheme = getMuiTheme(lightBaseTheme);

  return <Provider store={store}>
    {/*<MuiThemeProvider muiTheme={lightMuiTheme}>*/}
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    {/*</MuiThemeProvider>*/}
  </Provider>;
}

