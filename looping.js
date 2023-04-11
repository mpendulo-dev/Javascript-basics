// The notorious for loop
const vehicles = ["Mercedes", "Volvo", "BMW", "VW"];
let brands = " ";

for (let i = 0; i < vehicles.length; i++) {
    brands += vehicles[i] + " ";
}
console.log(brands);

// for/of statement loops through the values of an iterable objects.

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
    text += x + " "; //text = text + x + " "
}
console.log(text);

// JavaScript maps (looping over arrays)

const fruits = [
    { name: "apple", price: 5 },
    { name: "banana", price: 8 },
    { name: "orange", price: 3 },
];

fruits.map((fruit) => console.log(`${fruit.name} price is R${fruit.price}`));

// filter and etc...
