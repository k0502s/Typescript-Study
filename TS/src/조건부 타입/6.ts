export {};

type StringPropertName<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

interface Person {
    name: string;
    age: number;
    nation: string;
}

type T1 = StringPropertName<Person>;

type StringProperties<T> = Pick<T, StringPropertName<T>>;
type T2 = StringProperties<Person>;
