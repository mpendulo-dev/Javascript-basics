// Mechanisms for splitting JavaScript programs up into separate modules that can be imported when needed
// Break code into smaller chunks

// non-default in curly braces
import User, { printName as username, printAge } from "./person.js";

const user = new User("Nancy Doe", "Female", "Senior Cloud Engineer");
console.log(user);

username(user);
printAge(user);
