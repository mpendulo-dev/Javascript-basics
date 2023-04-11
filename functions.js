// A JavaScript function is a block of code designed to perform a particular task.
// Executed when "something" invokes it (calls it).

// declaration
function sum(a, b) {
    return a + b;
}
// function call
sum(10, 110);

// convert miles to kilometers
function convertMilesToKilometers(miles) {
    return miles * 1.60934;
}

convertMilesToKilometers(100);
console.log(`100 miles is equivalent to ${convertMilesToKilometers(100)} KM's`);

// Arrow function

// 1.

const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 110));

// 2.

const convertMilesToKms = (miles) => {
    return miles * 1.60934;
};
console.log(convertMilesToKms(100));
