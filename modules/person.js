export default class User {
    constructor(name, gender, occupation) {
        this.name = name;
        this.gender = gender;
        this.occupation = occupation;
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(user) {
    console.log(`User is ${user.gender}`);
}

// export { User, printName, printAge };
