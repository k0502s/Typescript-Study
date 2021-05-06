export {};

class Person {
    static Adultage = 26;
    constructor(public name: string, public age: number) {}
    sayHello() {
        console.log(`안녕 난 ${this.name}야`);
        console.log(Person.getAdultage(this.age) ? '나는 성인이 아니야' : '나는 성인이야');
    }
    static getAdultage(age: number) {
        return Person.Adultage <= age;
    }
}

const person = new Person('김진석', 26);
person.sayHello();
console.log(`성인 판단 기준 나이: ${Person.Adultage}`);
