// function sequence - JavaScript functions are executed in the sequence they are called.
// Not in the sequence they are defined.

function myDisplayer(some) {
    console.log(some);
}
function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();

// callback functions - A callback is a function passed as an argument to another function

// ! Asynchronous JavaScript - Functions running in parallel with other functions are called asynchronous
// "I will finish later!"

// In the example above, whatsappStatus is used as a callback.
// whatsappStatus is passed to setTimeout() as an argument.

setTimeout(whatsappStatus, 5000); //run function after 5000 milliseconds

const statusPosted = true;

function whatsappStatus() {
    console.log("Online🟢");
}
function userStatus() {
    console.log("Sbwl coding 👩🏽‍💻");
}
statusPosted ? setTimeout(userStatus, 6000) : console.log("No status to show");

//TODO: Promises later (complexity)
// Good for tasks that take time
let promise = new Promise((resolve, reject) => {
    // promise definition
    let a = 1 + 1;

    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

//then after the success/resolve
promise
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    });

// ! JavaScript Async
/* 

        "async and await make promises easier to write"

        async makes a function return a Promise

        await makes a function wait for a Promise
*/

// ? The keyword async before a function makes the function return a promise:

async function getResponse() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
}
