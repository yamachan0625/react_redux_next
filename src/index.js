import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

let stateValue = {
  counter: 0,
  message: 'COUNTER',
};

const counter = (state = stateValue, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
        message: 'INCREMENT',
      };
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
        message: 'DECREMENT',
      };
    case 'RESET':
      return {
        counter: 0,
        message: 'RESET',
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'root',
  storage,
};

const PersistReducer = persistReducer(persistConfig, counter);

let store = createStore(PersistReducer);
let pstore = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
