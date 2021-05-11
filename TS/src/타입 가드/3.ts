export {};

interface Person {
    name: string;
    age: number;
 
}
interface Product {
    name: string;
    price: number;
  
}

function print(value: Person | Product){
    console.log(value.name);
    if(value instanceof Person) {
        console.log(value.age);
    } else {
        console.log(value.price);
    }
}
