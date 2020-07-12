import React from 'react';
import { connect } from 'react-redux';

const Message = (props) => {
  const style = {
    fontSize: '20px',
    padding: '20px 5px',
  };

  return (
    <p stye={style}>
      {props.message}:{props.counter}
    </p>
  );
};

export default connect((state) => state)(Message);
