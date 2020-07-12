import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

const AddForm = (props) => {
  const [message, setMessage] = useState('');
  const input = {
    fontSize: '16px',
    color: '#006',
    padding: '1px',
    margin: '5px 0px',
  };

  const btn = {
    fontSize: '14px',
    color: '#006',
    padding: '2px 10px',
  };

  const messageStyle = {
    fontSize: '16px',
    color: '#006',
    margin: '5px 10px',
  };

  const doChange = (e) => {
    setMessage(e.target.value);
  };

  const doAction = (e) => {
    e.preventDefault();
    let action = addMemo(message);
    props.dispatch(action);
    setMessage('');
  };

  return (
    <div>
      <p style={messageStyle}>{props.message}</p>
      <form onSubmit={doAction}>
        <input
          type="text"
          size="40"
          onChange={doChange}
          style={input}
          value={message}
          required
        />
        <input type="submit" style={btn} value="Add" />
      </form>
    </div>
  );
};

export default connect((state) => state)(AddForm);
