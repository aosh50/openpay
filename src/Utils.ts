import * as React from 'react';
import * as D from 'date-fns';

export const PlanFormat = "eo 'of' MMMM";

export const calcFinishDate = (startDate: Date, interval: string, payments: number): Date => {    
    var duration: D.Duration = {};
    switch (interval) {
        case "weekly": duration.days = 7 * payments; break;
        case "fortnightly": duration.days = 14 * payments; break;
        case "monthly": duration.months = payments; break;
    }
    
    return D.add(startDate, duration);

}

export const formatDate = (d: Date, format?: string): string => {
    
    return D.format(d, format ? format : "dd/MM/yyyy");
}

export const Capitalise = function(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export const PaymentAmount = (payments: number): string => {
    const purchasePrice = 123.45; // Constant as per Requirements

    var intervalPayment = purchasePrice / payments;
    var roundedPayment = (Math.ceil(intervalPayment*20)/20).toFixed(2); // Rounding up to the nearest 5c.
    return roundedPayment;
}