import * as F from 'faker';
import * as U from './Utils';

export interface Plan {
    interval: string;
    paymentCount: number;
    selected: boolean;
    finishDate: Date;
    id: string;
}

export interface ApiPlan {
    interval: string;
    paymentCount: number;
}

export const mapApiPlanToPlan = (a: ApiPlan): Plan => {
    return {
        ...a,
        selected: false,
        finishDate: U.calcFinishDate(new Date(), a.interval, a.paymentCount),
        id: F.random.uuid() // Generate a unique identifier
    }
}

export const GeneratePlan = (n: number): ApiPlan => {
    const intervals = ["weekly", "fortnightly", "monthly"];
    var interval = n > 3 ? F.random.arrayElement(intervals) : intervals[n]; // Ensure at least 1 of each interval
    return {
        interval: interval,
        paymentCount: F.random.number({min: 2, max: 16 }), // Limit payment counts to geneate "realistic" data
    }
}

