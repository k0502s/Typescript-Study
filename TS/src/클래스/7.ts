export {};

abstract class Person {
    constructor(public name: string) {}
    sayHello() {
        console.log(`안녕 난 ${this.name}야`);
    }
    abstract sayHello2(): void;
}

class Programmer extends Person {
    sayHello(){
        super.sayHello();
        console.log(`난 개발자야`);
    }
    sayHello2() {
        console.log(`반가워`);
    }
}

const person = new Person('김진석');
const programmer = new Programmer('김진석2')
programmer.sayHello();
programmer.sayHello2();
