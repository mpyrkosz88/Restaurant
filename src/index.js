//libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//components
import App from './App';

//styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
// https://react-bootstrap.github.io/layout/grid/
// https://editor.wix.com/html/editor/web/renderer/render/template/562833d2-5d49-41e6-957c-cf4f514c56ae?isEdited=true&isSantaEditor=true&dsOrigin=Editor1.4&debug=&lang=pl&metaSiteId=e1f8e013-5697-4f5f-8a33-93e1d3cc6c62&editorSessionId=d063d67f-e48f-43fd-afa5-f7db148c6382&esi=d063d67f-e48f-43fd-afa5-f7db148c6382

//reducers

import cart from './store/reducers/cart';
import auth from './store/reducers/auth';
import dataBase from './store/reducers/dataBase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
  cart: cart,
  auth: auth,
  dataBase: dataBase
})


const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
