import React, { useState } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

const FindForm = (props) => {
  const [find, setFind] = useState('');
  const input = {
    fontSize: '14px',
    color: '#006',
    padding: '0px',
  };

  const btn = {
    fontSize: '12px',
    color: '#006',
    padding: '1px 10px',
  };

  const doChange = (e) => {
    setFind(e.target.value);
  };

  const doAction = (e) => {
    e.preventDefault();
    let action = findMemo(find);
    props.dispatch(action);
  };

  return (
    <div>
      <form onSubmit={doAction}>
        <input
          type="text"
          size="10"
          onChange={doChange}
          style={input}
          value={find}
          required
        />
        <input type="submit" style={btn} value="Find" />
      </form>
    </div>
  );
};

export default connect((state) => state)(FindForm);
