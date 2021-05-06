export {};

class Person {
    constructor(public name: string, public age: number) {}
}

const person = new Person('김진석', 26);
console.log(person.name, person.age);
