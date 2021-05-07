export {};

interface Person {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
}

interface korean extends Person {
    //Person에 korean 할당
    liveInSeoul: boolean;
}
//keyof는 K가 Person 타입의 키 값과 일치해야 한다는 의미다.
function swapProperty<T extends Person, K extends keyof Person>(p1: T, p2: T, key: K): void {
    const temp = p1[key];
    p1[key] = p2[key];
    p2[key] = temp;
}
const p1: korean = {
    name: '김진석',
    age: 26,
    liveInSeoul: true,
};

const p2: korean = {
    name: '진석김',
    age: 62,
    liveInSeoul: false,
};

const p3: Product = {
    name: '진석군',
    price: 65,
};

swapProperty(p1, p2, 'age');
swapProperty(p1, p2, 'age1'); //오류. keyof로 age1이 정한 Person의 타입 키 값에 존재하지 않기 때문
swapProperty(p1, p3, 'age'); //오류. p3의 타입 Product는 T에 할당 받지 않았기 때문
