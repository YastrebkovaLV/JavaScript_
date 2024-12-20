// Функции

// 1

function square(num) {
    return num * num;
}

// 2

function isEven(num) {
    return num % 2 === 0;
}

// 3

function firstLetter(str) {
    return str.charAt(0);
}

// 4

function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

// 5

function stringLength(str) {
    return str.length;
}

// 6

function greet(name = "нет имени") {
    console.log(`Привет, ${name}!`);
}

// 7

function isPositive(num) {
    return num > 0;
}

// 8

function maxInArray(arr) {
    return Math.max(...arr);
}

// 9

function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}

// 10

function splitWords(str) {
    return str.split(' ');
}

