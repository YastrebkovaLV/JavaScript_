// Задание 1

const MyName = "Lilia";
const ProgrammingLanquage = "JavaScript";
const ReasonText = " мне интересен язык ";
const NumberOfTime = "10 секунд,ахаха";

console.log(` Меня зовут, ${MyName}. Сейчас я изучаю язык программирования ${ProgrammingLanquage} на паре по ${ProgrammingLanquage}. Я хочу стать разработчиком , потому что ${ReasonText}. До этого я изучала ${ProgrammingLanquage} ${NumberOfTime} .`);

// Задание 2

const Text = "Я учу джаваскрипт";

console.log(Text.length);
console.log(Text.charAt(0) + Text.charAt(8));

// Задание 3

const InfoText = ` Меня зовут, ${MyName}. Сейчас я изучаю язык программирования ${ProgrammingLanquage.toUpperCase()}
` +
    ` на паре по ${ProgrammingLanquage.toUpperCase()} . 
` +
    `Я хочу стать разработчиком, потому что ${ReasonText}. 
` +
    `До этого я изучала ${ProgrammingLanquage.toUpperCase()} 
` +
    `времени ${NumberOfTime}.`



const First = InfoText.charAt(1);
const Last = InfoText.charAt(212);

console.log(InfoText.length -1);
console.log(InfoText);
console.log(First + Last );

// Задание 4

let text = prompt("Как вас зовут?");

text = text.toLowerCase().trim();

// Задание 5

let Age = prompt(" Сколько вам лет? ");

Age = Number(Age);

alert(` Вас зовут : ${text} и вам ${Age} лет`);

// Задание 6

let userString = prompt("Введите текст для обрезки").trim();

let startSliceIndex = parseInt(prompt("Введите индекс, с которого нужно начать обрезку строки"));

let endSliceIndex = parseInt(prompt("Введите индекс, которым нужно закончить обрезку строки"));

let resultString = userString.slice(startSliceIndex, endSliceIndex);

alert("Результат: " + resultString);

// Задание 7

let userText = prompt("Введите текст").trim();

let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

let trimmedText = userText.substring(0, indexOfWord);

alert("Результат: " + trimmedText);
