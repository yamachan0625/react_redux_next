import React from 'react';
import { connect } from 'react-redux';

import Item from './Item';

const Memo = (props) => {
  let data;
  let n = 0;
  switch (props.mode) {
    case 'default':
      data = props.data.map((value) => (
        <Item key={value.message} value={value} index={n++} />
      ));
      break;
    case 'find':
      data = props.fdata.map((value) => (
        <Item key={value.message} value={value} index={n++} />
      ));
      break;
    case 'delete':
      data = props.data.map((value) => (
        <Item key={value.message} value={value} index={n++} />
      ));
      break;
    default:
      data = props.data.map((value) => (
        <Item key={value.message} value={value} index={n++} />
      ));
  }
  return (
    <table>
      <tbody>{data}</tbody>
    </table>
  );
};

export default connect((state) => state)(Memo);
