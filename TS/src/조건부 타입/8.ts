export {};

type Overwrite<T, U> = { [P in Exclude<keyof T, keyof U]: T[P] } & U;

interface Person {
    name: string;
    age: number;
}

type T1 = Overwrite<Person, { nation: string; age: string; };
const p: T1 = {
    name: 'jinseok',
    age: '26',
    nation: 'korea'
}
