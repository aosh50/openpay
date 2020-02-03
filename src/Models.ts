import * as F from 'faker';
import * as U from './Utils';

export interface Plan {
    interval: string;
    paymentCount: number;
    selected: boolean;
    finishDate: Date;
}

export interface ApiPlan {
    interval: string;
    paymentCount: number;
}

export const mapApiPlanToPlan = (a: ApiPlan): Plan => {
    return {
        ...a,
        selected: false,
        finishDate: U.calcFinishDate(new Date(), a.interval, a.paymentCount)
    }
}

export const GeneratePlan = (): ApiPlan => {

    var interval = F.random.arrayElement(["weekly", "fortnightly", "monthly"]);
    return {
        interval: interval,
        paymentCount: F.random.number({min: 2, max: 16 }), // Limit payment counts to geneate "realistic" data
    }
}

