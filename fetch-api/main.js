// JavaScript Fetch API
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

// async function getResponse() {
//     await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "GET",
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }
