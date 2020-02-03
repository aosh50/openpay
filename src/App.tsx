import React from 'react';
import './App.scss';
import * as C from './Components';

const App = () => {
  return (
    <div className="App">
      
        <C.IntervalButton
          label={'Weekly'}
          onClick={() => {return;}}
          selected={true}
        />
        <C.IntervalButton
          label={'Fortnightly'}
          onClick={() => {return;}}
          selected={false}
        />
    </div>
  );
}

export default App;
