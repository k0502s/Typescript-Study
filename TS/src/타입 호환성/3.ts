export {};


interface Person {
    name: string;
 
}
interface Product {
    name: string;
    age: number;
}

const obj = { name: 'jin', age: '23', city: 'seoul'};
let person: Person = obj;
let product: Product = obj;

product = person
person = product