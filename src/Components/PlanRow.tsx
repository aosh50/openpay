import * as React from 'react';
import './Components.scss';
import * as M from '../Models';
import * as U from '../Utils';
import { ReactComponent as Check } from './check.svg';

interface Props {
  plan: M.Plan;
  onClick: () => void;
}

export const PlanRow: React.FC<Props> = (p) => (
    <div 
    className={`plan`}
    onClick={p.onClick}
    >
        <div className={'plan__content'}>
            <div 
                className={'plan__title'}
            >
                {`Finishes ${U.formatDate(p.plan.finishDate, U.PlanFormat)}`}
            </div>
            <div 
                className={'plan__subtitle'}
            >
                {`${p.plan.paymentCount} x $${U.PaymentAmount(p.plan.paymentCount)} · ${U.Capitalise(p.plan.interval)} · Inc. fee`}
            </div>
        </div>
        <div className={'plan__detail'}>
            {p.plan.selected ? <Check style={{fill: 'green'}} className={'checkmark'} /> : ''}
        </div>
  </div>
);
