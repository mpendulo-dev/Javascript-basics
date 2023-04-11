// conditionals - if/statements
// The ternary operator is a simplified conditional operator like if / else.

const invited = false;

if (invited) {
    console.log("Welcome to my 21st birthday celebration!🎂🍾");
} else {
    console.log("Sorry, you are not invited💔");
}

// 1. extend - else if

if (invited) {
    console.log("Welcome to my 21st birthday celebration!🎂🍾");
} else if (invited === null) {
    console.log("Invalid input 🚧");
} else {
    console.log("Sorry, you are not invited💔");
}

//TODO:  Switch statements - Revise

// Ternary operators (short hand syntax for if/else)

const absent = false;

absent
    ? console.log("someone was absent today")
    : console.log("everyone was present");
