import React from 'react';
import Message from './message';
import Button from './button';

import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div>
      <h1>Redux-persist</h1>
      <Message />
      <Button />
    </div>
  );
};

export default connect()(App);
