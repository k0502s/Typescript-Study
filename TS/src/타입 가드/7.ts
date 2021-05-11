export {};

interface Person {
    type: 'Person';
    name: string;
    age: number;
}
interface Product {
      type: 'Product';
    name: string;
    price: number;
}

function print(value: Person | Product) {
  if( 'age' in value){
      console.log(value.age)
  } else{
    console.log(value.price)
  }
}
