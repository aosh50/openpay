import React from 'react';
import * as U from './Utils';

test('Format the date correctly', () => {
    var d = new Date(Date.parse("Sat Feb 01 2020 12:00:00 GMT+0000"));
    var formatted = U.formatDate(d);
    expect(formatted).toBe("01/02/2020");

    var customFormat = U.formatDate(d, "yyyy-MM-dd");
    expect(customFormat).toBe("2020-02-01")

    var planFormat = U.formatDate(d, U.PlanFormat);
    expect(planFormat).toBe("7th of February");
});

test('Calculate the correct end date', () => {
  
    var startDate = new Date(Date.parse("Sat Feb 01 2020 12:00:00 GMT+0000"));
    var expectedFinishDate = "08/02/2020"
    var finishDate = U.formatDate(U.calcFinishDate(startDate, "weekly", 1));
    
    expect(finishDate).toStrictEqual(expectedFinishDate);

    var startDateMonth = new Date(Date.parse("Sat Feb 01 2020 12:00:00 GMT+0000"));
    var expectedFinishDateMonth = "01/12/2020";
    var finishDateMonth = U.formatDate(U.calcFinishDate(startDateMonth, "monthly", 10));
    
    expect(finishDateMonth).toStrictEqual(expectedFinishDateMonth);


    var startDateFn = new Date(Date.parse("Sat Feb 01 2020 12:00:00 GMT+0000"));
    var expectedFinishDateFn = "11/04/2020";
    var finishDateFn = U.formatDate(U.calcFinishDate(startDateFn, "fortnightly", 5));
    
    expect(finishDateFn).toStrictEqual(expectedFinishDateFn);
    
});

test('Calculate correct interval payment', () => {
    var payments = 10;
    var result = U.PaymentAmount(payments);
    expect(result).toBe("12.35");
})