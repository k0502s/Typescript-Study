export {};

function makeArray<T>(defaultValue: T, size: number): T[]{
    const arr: T[] = [];
    for( let i = 0; i < size; i++){
        arr.push(defaultValue);
    }
    return arr;
}

const arr1 = makeArray<number>(1, 10);
const arr2 = makeArray<string>('empty', 10);