import { createStore } from 'redux';

const initData = {
  data: [],
  message: 'please type message',
  mode: 'default',
  fdata: [],
};

// reducer
export const memoReducer = (state = initData, action) => {
  switch (action.type) {
    case 'ADD':
      return addReduce(state, action);
    case 'DELETE':
      return deleteReduce(state, action);
    case 'FIND':
      return FindReduce(state, action);
    default:
      return state;
  }
};

// action

/**
 * Memo追加
 */
const addReduce = (state, action) => {
  let d = new Date();
  let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
  let data = {
    message: action.message,
    created: f,
  };
  let newdata = state.data.slice();
  newdata.unshift(data);
  return {
    data: newdata,
    message: 'added!',
    mode: 'default',
    fdata: [],
  };
};

/**
 * Memo検索
 */
const FindReduce = (state, action) => {
  console.log(action);
  let f = action.find;
  let fdata = [];
  state.data.forEach((value) => {
    if (value.message.indexOf(f) >= 0) {
      fdata.push(value);
    }
  });

  return {
    data: state.data,
    message: 'find!',
    mode: 'find',
    fdata: fdata,
  };
};

/**
 * Memo削除
 */
const deleteReduce = (state, action) => {
  let newdata = state.data.slice();
  newdata.splice(action.index, 1);
  console.log(newdata);

  return {
    data: newdata,
    message: 'delete!',
    mode: 'delete',
    fdata: [],
  };
};

// actionCreater

/**
 * Memo追加のアクション
 */
export const addMemo = (text) => {
  return {
    type: 'ADD',
    message: text,
  };
};

/**
 * Memo削除のアクション
 */
export const deleteMemo = (num) => {
  return {
    type: 'DELETE',
    index: num,
  };
};

/**
 * Memo検索のアクション
 */
export const findMemo = (text) => {
  return {
    type: 'FIND',
    find: text,
  };
};

export default createStore(memoReducer);
