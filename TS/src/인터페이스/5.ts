export {};

interface Person {
   readonly name: string;
    age: number;
    [key: string]: string | number;
}

const p2: Person = { name: 'jin', age: 25, birthday: '1997-01-01'};

