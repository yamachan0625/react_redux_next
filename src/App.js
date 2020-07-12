import React from 'react';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';
import PersistForm from './memo/PersistForm';

import { connect } from 'react-redux';

const App = (props) => {
  const td = {
    width: '250px',
  };
  return (
    <div>
      <h1>Memo</h1>
      <AddForm />
      <FindForm />
      <DelForm />
      <PersistForm />
      <hr />
      <table>
        <tbody>
          <tr>
            <td style={td}> </td>
            <td style={td}> </td>
          </tr>
        </tbody>
      </table>
      <Memo />
    </div>
  );
};

export default connect()(App);
