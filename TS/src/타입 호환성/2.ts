export {};


interface Person {
    name: string;
    age: number;
}
interface Product {
    name: string;
    age: number;
}

const person: Person = { name: 'jin', age: 26};
const product: Product = person;