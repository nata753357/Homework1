// Задание 1

let password = 'пароль';
let userPass = prompt('Введите пароль');

if (userPass === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// Задание 2

let c = 4

if (c >= 0 && c <= 10){
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

// Задание 3

let d = 120
let e = 60

if (d >= 100 || e >= 100) {
     console.log ('Верно');
} else {
    console.log ('Неверно');
}

// Задание 4

let a = '2';
let b = '3';

alert (Number(a) + Number(b));

// Задание 5

let montNumber = 12;

switch (montNumber) {
    case 1:
    case 2:
    case 12:   
        alert ('зима');
        break;
    case 3:
    case 4:
    case 5:
        alert ('весна');
        break;
    case 6:
    case 7:
    case 8:
        alert ('лето');
        break;    
    case 9:
    case 10:
    case 11:
        alert ('осень');
        break;
    default:
        alert ('Неверно');
        break;     
}

