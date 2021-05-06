export {};

enum Fruit {
    Apple,
    Banana,
    Orange,
}

enum Language {
    Korean = 'ko',
    English = 'en',
    Japanes = 'jp',
}

console.log('1 in Fruit:', getIsValidEnumValue(Fruit, 1));
console.log('1 in Fruit:', getIsValidEnumValue(Fruit, 5));
console.log('Ornage in Fruit:', getIsValidEnumValue(Fruit, Ornage));
console.log('ko in Language:', getIsValidEnumValue(Language, ko));
console.log('Korean in Language:', getIsValidEnumValue(Language, Korean));
