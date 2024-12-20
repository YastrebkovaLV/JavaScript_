// Массивы

// 1. Создайте массив, содержащий числа от 1 до 5, и выведите его на экран.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// 2. Создайте массив с именами ["John", "Ivan", "Peter"] и выведите имя "Peter" на экран.
let names = ["John", "Ivan", "Peter"];
console.log(names[2]); // Peter

// 3. В массиве ["Apple", "Banana", "Orange"] замените "Banana" на "Mango" и выведите результат.
let fruits = ["Apple", "Banana", "Orange"];
fruits[1] = "Mango"; // Заменяем "Banana" на "Mango"
console.log(fruits);

// 4. В массив ["Dog", "Cat"] добавьте элемент "Hamster" в конец массива и выведите результат.
let pets = ["Dog", "Cat"];
pets.push("Hamster"); // Добавляем "Hamster"
console.log(pets);

// 5. В массиве ["Red", "Green", "Blue"] удалите первый элемент и выведите результат.
let colors = ["Red", "Green", "Blue"];
colors.shift(); // Удаляем первый элемент
console.log(colors);

// 6. Создайте массив чисел от 5 до 15. Пройдитесь по массиву циклом и выведите каждый элемент на экран.
let range = [];
for (let i = 5; i <= 15; i++) {
    range.push(i);
}
for (let num of range) {
    console.log(num);
}

// 7. В массиве чисел [20, 20, 30, 40, 50] найдите сумму всех элементов и выведите результат.
let numbersArray = [20, 20, 30, 40, 50];
let sum = 0;
for (let num of numbersArray) {
    sum += num;
}
console.log(sum);

// 8. В массиве чисел [23, 45, 67, 12, 89, 54, 37, 120] найдите максимальное число и выведите его.
let anotherArray = [23, 45, 67, 12, 89, 54, 37, 120];
let maxNumber = Math.max(...anotherArray);
console.log(maxNumber);


