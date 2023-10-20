type Permissions  = 'admin' | 'user' | 'manager';

interface DapartmentsForPerssion {
    depName: string;
    lvl: number;
}

const DepsForPerms: Record<Permissions, DepartmentsForPermssion> = {
    admin: {
        depName: 'security',
        lvl:10,
    },
    user: {
        depName: 'sales',
        lvl:5,
    },
    manager: {
        depName: 'sales',
        lvl:10,
    },
    
}

type TuplePermissions = [Permissions, Permissions];

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

type BasicUserReadonly = Readonly<BasicUser>
type BasicUserRequired = Required<BasicUser>
type BasicUserPartial = Partial<BasicUser>

const user: FullUser<boolean> = {
    name: 'Ali',
    surname: 'Sajjad',
    age: 31,
    isAdmin: true,
    account:20,
    permissions: ['admin', 'user', 'manager'],
};

const usersArray: FullUser<boolean>[]= [user, user, user];

function getFirst<T>(arrayUser: T[]): T {
    return arrayUser[0];
}

getFirst<FullUser>(usersArray)

type MathFunc<T = number> = (a: T, b: T) => T;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;