const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

//Would've assumed that 0,1 we're the first two drivers but kept failing test.

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()];

//Doesn't pass???

function createFareMultiplier(fare) {
    return function timesFour(x4) {
        return fare * x4;
    }
}

const farex2 = function fareDoubler() {
    return createFareMultiplier(2);
}

const farex3 = function fareTripler() {
    return createFareMultiplier(3);
}

const selectDifferentDrivers = function([drivers], otherDrivers) {
    return otherDrivers(drivers);
}