import React from 'react';
import { render } from '@testing-library/react';
import { PlanRow } from './PlanRow';
import * as M from '../Models';

test('renders the row', () => {
    var apiPlan: M.ApiPlan = {
        interval: "weekly",
        paymentCount: 10
    };
    var plan = M.mapApiPlanToPlan(apiPlan);

    const { getByText } = render(<PlanRow  onClick={() => {return;}} plan={plan} />);
    const titleElement = getByText(/Finishes 2nd of April/i);
    expect(titleElement).toBeInTheDocument();
    

});
test('renders the checkmark', () => {
    var apiPlan: M.ApiPlan = {
        interval: "weekly",
        paymentCount: 10
    };
    var plan = M.mapApiPlanToPlan(apiPlan);
    plan.selected = true;

    const { getByText } = render(<PlanRow  onClick={() => {return;}} plan={plan} />);
    const tick = getByText(/check.svg/i);
    expect(tick).toBeInTheDocument();

});
