// Условия

// Задание 1
let number = 5;
if (number % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}

// Задание 2
let time = 22;
if (time >= 5 && time < 12) {
    console.log("Утро");
} else if (time >= 12 && time < 18) {
    console.log("День");
} else if (time >= 18 && time < 22) {
    console.log("Вечер");
} else {
    console.log("Ночь");
}

// Задание 3
let age = 20;
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// Задание 4
let num1 = 40;
let num2 = 555;
if (num1 > num2) {
    console.log("Наибольшее число: " + num1);
} else if (num2 > num1) {
    console.log("Наибольшее число: " + num2);
} else {
    console.log("Числа равны");
}

// Задание 5
let grade = 55;
if (grade >= 90) {
    console.log("Отлично");
} else if (grade >= 75) {
    console.log("Хорошо");
} else if (grade >= 60) {
    console.log("Удовлетворительно");
} else {
    console.log("Неудовлетворительно");
}

// Задание 6
let price = 22;
let money = 1110;
if (money >= price) {
    console.log("Покупка возможна");
} else {
    console.log("Недостаточно средств");
}

// Задание 7
let day = 3;
if (day >= 1 && day <= 5) {
    console.log("Рабочий день");
} else {
    console.log("Выходной день");
}

// Задание 8
let str = "Привет, мир!";
if (str.length > 10) {
    console.log("Длинная строка");
} else {
    console.log("Короткая строка");
}

// Задание 9
let inputPassword = "12345";
let correctPassword = "12345";
if (inputPassword === correctPassword) {
    console.log("Доступ разрешен");
} else {
    console.log("Неверный пароль");
}

// Задание 10
let Hour = 5;
if (Hour >= 0 && Hour < 6) {
    console.log("Спать");
} else if (Hour >= 6 && Hour < 12) {
    console.log("Работать");
} else if (Hour >= 12 && Hour < 14) {
    console.log("Обедать");
} else {
    console.log("Работать");
}

// Задание 11
let month = 6;
if (month === 12 || month <= 2) {
    console.log("Зима");
} else if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Лето");
} else {
    console.log("Осень");
}