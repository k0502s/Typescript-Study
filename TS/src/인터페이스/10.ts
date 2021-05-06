export {};

interface Perosn {
    name: string;
    age: number;
}
interface Product {
    name: string;
    price: number;
}

type PP = Perosn & Product;
const pp: PP = {
    name: 'a',
    age: 23,
    price: 1000
};

