import React from 'react';
import './App.scss';
import * as C from './Components';
import * as M from './Models';
import * as F from 'faker';
import * as _ from 'ramda';

const App = () => {

  const [plans, setPlans] = React.useState<Array<M.Plan>>([]);
  const [selectedInterval, setSelectedInterval] = React.useState('weekly');

  React.useEffect(() => {    
    var someGeneratedPlans = [];
    for (var i = 0; i < F.random.number({min: 4, max: 15 }); i++) {
      someGeneratedPlans.push(M.GeneratePlan());
    }
    setPlans(_.map(M.mapApiPlanToPlan, someGeneratedPlans));
  }, []);

  
  return (
    <div className="App">

        <C.Header />
        <div className={"App__content"}>
          <C.BackButton        
            label={'Back'}
            onClick={() => {return;}}
          />
          <div className={'App__message'}>
            Customise your plan
          </div>
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
          <C.IntervalButton
            label={'Monthly'}
            onClick={() => {return;}}
            selected={false}
          />
          
          {_.map(p => 
            <C.PlanRow
              plan={p}
              onClick={() => {return;}}
            />
          , plans)}
        </div>
    </div>
  );
}

export default App;
