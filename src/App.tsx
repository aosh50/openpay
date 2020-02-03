import React from 'react';
import './App.scss';
import * as C from './Components';

const App = () => {
  return (
    <div className="App">

        <C.Header />
        
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

        <C.PlanRow 
          plan={{
            interval: "weekly",
            paymentCount: 10,
            finishDate: new Date(),
            selected: false
          }}
          onClick={() => {return; }}
        />
        <C.PlanRow 
          plan={{
            interval: "monthly",
            paymentCount: 6,
            finishDate: new Date(),
            selected: true
          }}
          onClick={() => {return; }}
        />
    </div>
  );
}

export default App;
