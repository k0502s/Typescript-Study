export {};

class Person {
    sayHello() {
        console.log('안녕');
    }
}

class Programmer extends Person {
  fixBug() {
      console.log('버그 수정')
  }
}

const programmer = new Programmer();
programmer.fixBug();
programmer.sayHello();
