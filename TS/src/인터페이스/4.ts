export {};

interface Person {
   readonly name: string;
    age?: number;
}

const p1: Person = { name: 'jin'};

p1.name = 'jone'

const p2: Person = { name: 'jin', birthday: '1997-01-01'};

