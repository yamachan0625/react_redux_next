import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import MemoStore, { memoReducer } from './memo/Store';
import App from './App';

const persistConfig = {
  key: 'memo',
  storage,
  blacklist: ['message', 'mode', 'fdata'],
  whitelist: ['data'],
};

const PersistReducer = persistReducer(persistConfig, memoReducer);

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

export default pstore;
