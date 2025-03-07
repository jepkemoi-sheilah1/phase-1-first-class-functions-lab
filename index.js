// Code your solution in this file!
//function to return the first two drivers in an array
function returnFirstTwoDrivers(drivers) {//returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
    return drivers.slice(0, 2);
};
// function to return the last two drivers in an array
function returnLastTwoDrivers(drivers) {//returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.  
    return drivers.slice(-2); 

};


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];//selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers())

    function createFareMultiplier(multiplier) {//createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.  
    return function(fare) {
        return fare * multiplier;
    };
}

    const fareDoubler = createFareMultiplier(2);//fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function will double the fares.  
    const fareTripler = createFareMultiplier(3);//fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function will triple the fares.

    function selectDifferentDrivers(drivers, whichDrivers) {//selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
    return whichDrivers(drivers);
//1. Declare a variable with const and assign a function to it
//2. The assigned function should accept two arguments: an array of drivers and a function
//3. The function should return the result of the function when given the array of drivers
//4. If returnFirstTwoDrivers() is passed in as the second argument, selectDifferentDrivers() will return the first two drivers
// 5. If returnLastTwoDrivers() is passed in as the second argument, selectDifferentDrivers() will return the last two drivers
//6. HINT: Consider using the slice() method
//7. HINT: Look back at the last two functions for a refresher on the structure of the returnFirstTwoDrivers() and returnLastTwoDrivers() functions
//
// 1. returnFirstTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.
// 2. returnLastTwoDrivers() — Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
// 3. selectingDrivers — This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers())
// 4. createFareMultiplier() — This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
// 5. fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function will double the fares.
// 6. fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function will triple the fares.
//7. selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.
}
