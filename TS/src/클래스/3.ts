export {};

class Person {
    #name: string;
    constructor(name: string) {
        this.#name = name;
    }
    sayHello() {
        console.log(`안녕 난 ${this.#name}야`);
    }
}

class Programmer extends Person {
    constructor(name: string) {
        super(name);
    }
    sayHello() {
        super.sayHello();
        this.#name
        console.log(`직업은 개발자이고.`);
    }
}

const programmer = new Programmer('김진석');
programmer.sayHello();
console.log(programmer.#name);
