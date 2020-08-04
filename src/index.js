import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { getAllProducts } from './actions';


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

store.dispatch(getAllProducts())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
