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

  const filteredPlans = () => {
    return _.filter(p => p.interval === selectedInterval, plans);
  }
  const sortedPlans = () => {
    return _.sortBy(p => p.paymentCount, filteredPlans());
  }

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
            onClick={() => setSelectedInterval("weekly")}
            selected={selectedInterval === "weekly"}
          />
          <C.IntervalButton
            label={'Fortnightly'}
            onClick={() => setSelectedInterval("fortnightly")}
            selected={selectedInterval === "fortnightly"}
          />
          <C.IntervalButton
            label={'Monthly'}
            onClick={() => setSelectedInterval("monthly")}
            selected={selectedInterval === "monthly"}
          />
          
          {_.map(p => 
            <C.PlanRow
              plan={p}
              onClick={() => {
                var newPlans = _.map(plan => {
                  return {
                    ...plan,
                    selected: plan.id === p.id
                  }
                }, plans);
                setPlans(newPlans);
              }}
            />
          , sortedPlans())}
        </div>
    </div>
  );
}

export default App;
