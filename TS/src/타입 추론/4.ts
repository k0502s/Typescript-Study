export {};

interface Person {
    name: string;
    age: number;
}

interface Korean extends Person {
    liveInSeoul: boolean;
}
interface Japanese extends Person {
    liveInTokyo: boolean;
}

const p1: Person = { name: 'jin', age: 25 };
const p2: Korean = { name: 'jin', age: 25, liveInSeoul: true };
const p3: Japanese = { name: 'jin', age: 26, liveInTokyo: false };
const arr1 = [p1, p2, p3];
const arr2 = [p2, p3];