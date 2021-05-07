export {};


interface Person {
    name: string;
    age?: number;
 
}
interface Product {
    name: string;
    age: number;
}

const obj = { name: 'jin' };
let person: Person = obj;
let product: Product = obj;
