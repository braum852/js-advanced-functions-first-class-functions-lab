// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(x){
    return function(y){
       return x * y
    };
};

function fareDoubler(x){
    return x *= 2
}


function fareTripler(x){
    return x *= 3
}

const selectDifferentDrivers = function(arrayOfDrivers, selectingDrivers){
    return selectingDrivers(arrayOfDrivers)
}