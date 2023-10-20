let a: number;
let b: boolean;
let c: string;

let d: Array<string>;
interface BasicUser {
    name: string;
    surname: string;
    age: number;
    isAdmin: boolean;
    permissions?: string[]; 
}

const user: BasicUser = {
    name: 'Ali',
    surname: 'Sajjad',
    age: 31,
    isAdmin: true,
};

const user2: BasicUser = {
    name: 'Bilal',
    surname: 'Ikram',
    age: 31,
    isAdmin: false,
    permissions:['manager', 'operator', 'instructor'],
};

const usersArray: BasicUser[] = [user, user, user];

function getFirst<T>(arrayUser: T[]): T {
    return arrayUser[0];
}

getFirst<BasicUser>(usersArray)

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;