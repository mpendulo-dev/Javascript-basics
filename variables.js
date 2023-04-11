// Introduction of ES6 (ECMAScript 6) - ECMAScript was created to standardize JavaScript or
// ES6 is the latest version of Javascript (new features that we use for modern web)

// declaring a variable before ES6
var name = "John";
console.log(name);

let username = "John Doe";
// The let keyword allows you to declare a variable with block scope.

let age = 10;
console.log(age); // Here x is 10

{
    let age = 2;
    console.log(age); // Here x is 2
}

console.log(age); // Here x is 10

// The const keyword allows you to declare a constant
// const also has a block scope
const TAX_AMOUNT = 15 / 100;
