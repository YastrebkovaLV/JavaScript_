// Циклы

// Задание 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Задание 2

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Задание 3

const arr = [2, 4, 6, 8, 10];
let sum = 0;
for (let num of arr) {
    sum += num;
}
console.log(sum);

// Задание 4

const array = [2, 4, 6, 8, 10];
console.log(array.length);

// Задание 5

const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana'));

// Задание 6

const user = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (let key in user) {
    console.log(key + ': ' + user[key]);
}

// Задание 7

const array1 = [3, 7, 2, 9, 1];
let min = array1[0];
for (let num of array1) {
    if (num < min) {
        min = num;
    }
}
console.log(min);

// Задание 8

const array2 = [5, 12, 18, 3, 20, 7];
let count = 0;
for (let num of array2) {
    if (num > 10) {
        count++;
    }
}
console.log(count);

// Задание 9

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Задание 10

const str = 'JavaScript';
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(reversedStr);

