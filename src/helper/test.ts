let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

type Permissions  = 'admin' | 'user' | 'manager';

type BasicUser<A = boolean, P = string[]> = {
    name: string;
    surname: string;
    age: number;
    isAdmin: A;
    permissions?: P[]; 
};

type AdvanceUser = {
    account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A,P> & AdvanceUser;

const user: FullUser<boolean, Permissions> = {
    name: 'Ali',
    surname: 'Sajjad',
    age: 31,
    isAdmin: true,
    account:20,
    permissions: ['admin', 'user', 'manager'],
};

const usersArray: BasicUser[] = [user, user, user];

function getFirst<T>(arrayUser: T[]): T {
    return arrayUser[0];
}

getFirst<BasicUser>(usersArray)

type MathFunc<T = number> = (a: T, b: T) => T;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;