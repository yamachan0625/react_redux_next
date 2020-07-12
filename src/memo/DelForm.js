import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

const DelForm = (props) => {
  const [number, setNumber] = useState(0);
  const input = {
    fontSize: '16px',
    color: '#006',
    padding: '1px',
    margin: '5px 0px',
  };

  const btn = {
    fontSize: '10px',
    color: '#006',
    padding: '2px 10px',
  };

  const doChange = (e) => {
    setNumber(e.target.value);
  };

  const doAction = (e) => {
    e.preventDefault();
    let action = deleteMemo(number);
    props.dispatch(action);
    setNumber(0);
  };

  let n = 0;
  let items = props.data.map((value) => (
    <option key={n} value={n++}>
      {value.message.substring(0, 10)}
    </option>
  ));

  return (
    <div>
      <form onSubmit={doAction}>
        <select onChange={doChange} defaultValue="-1" style={input}>
          {items}
        </select>
        <input type="submit" style={btn} value="Del" />
      </form>
    </div>
  );
};

export default connect((state) => state)(DelForm);
