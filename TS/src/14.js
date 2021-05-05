"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Banana"] = 1] = "Banana";
    Fruit[Fruit["Orange"] = 2] = "Orange";
})(Fruit || (Fruit = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
    Language["Japanes"] = "jp";
})(Language || (Language = {}));
console.log('1 in Fruit:', getIsValidEnumValue(Fruit, 1));
console.log('1 in Fruit:', getIsValidEnumValue(Fruit, 5));
console.log('Ornage in Fruit:', getIsValidEnumValue(Fruit, Ornage));
console.log('ko in Language:', getIsValidEnumValue(Language, ko));
console.log('Korean in Language:', getIsValidEnumValue(Language, Korean));
