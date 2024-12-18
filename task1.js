// Типы данных

const Name = "Lilia";
console.log(typeof Name);

const Age = 18;
console.log(typeof Age);

const A = true;
console.log(typeof A);

let B
console.log(typeof B);

const c = null;
console.log(typeof c);

const MyId = Symbol('id');
console.log(typeof MyId);

const FirstNumber = BigInt(42);
console.log(typeof FirstNumber);

const child = {
    Nick: 'Lilia',
    Age: 18,

}

console.log(typeof child);

// Задание 2

let number = 33;
let string = "lol";
let boolean = true;

console.log("Изначальные значения:");
console.log("number:", number);
console.log("stringVar:", string);
console.log("booleanVar:", boolean);

number = "Теперь я строка";
string = 100;
boolean = null;

console.log("Измененные значения:");
console.log("numberVar:", number);
console.log("stringVar:", string);
console.log("booleanVar:", boolean);

