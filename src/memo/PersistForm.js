import React, { useState } from 'react';
import { connect } from 'react-redux';
import pstore from '../index';

const PersistForm = (props) => {
  const [check, setCheck] = useState('on');
  const c = {
    margin: '5px 0px',
  };
  const label = {
    fontSize: '12px',
    color: '#006',
    padding: '2px 10px',
  };

  const doAction = (e) => {
    let f = e.target.checked;
    setCheck(f ? 'on' : '');
    if (f) {
      pstore.persist();
      pstore.pause();
    } else {
      pstore.pause();
    }
  };

  return (
    <div>
      <label style={label}>
        <input
          type="checkbox"
          id="check"
          size="40"
          onChange={doAction}
          style={c}
          checked={check}
        />
        Persist
      </label>
    </div>
  );
};

export default connect((state) => state)(PersistForm);
