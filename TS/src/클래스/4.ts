export {};

class Person {
    readonly name: string;
    private readonly age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person('김진석', 26);
person.name = '김진석';
