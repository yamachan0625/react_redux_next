import React from 'react';
import { connect } from 'react-redux';

const Button = (props) => {
  const style = {
    fontSize: '16px',
    padding: '5px 10px',
  };

  const doAction = (e) => {
    if (e.shiftKey) {
      props.dispatch({ type: 'DECREMENT' });
    } else if (e.metaKey) {
      props.dispatch({ type: 'RESET' });
    } else {
      props.dispatch({ type: 'INCREMENT' });
    }
  };

  return (
    <button style={style} onClick={doAction}>
      click
    </button>
  );
};

export default connect()(Button);
