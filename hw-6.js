// Задание 1

const arr = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < arr.length; i ++) {
    console.log (arr[i]);
    if (arr [i] === 10) {
        break;
    }
}

// Задание 2

const array = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < array.length; i ++) {
    if (array [i] === 4) {
        console.log (i);
        break;
    }
}

// Задание 3

const Array = [1, 3, 5, 10, 20];
console.log (Array.join(' '));

// Задание 4

const arr0 = [];

for (let i = 0; i < 3; i++) {
    const arr2 = [];
    for (let i = 0; i < 3; i ++) {
        arr0.push(1);
    }
    arr0.push(arr2)
}
console.log(arr0);

// Задание 5

const arr1 = [1, 1, 1];
arr1.push (2, 2, 2);
console.log (arr1);

// Задание 6

const arr3 = [9, 8, 7, 'a', 6, 5];
arr3.sort();
console.log (arr3);

// Задание 7

const arr4 = [9, 8, 7, 6, 5];

const userNumber = +prompt ('Введите число');
if (arr4.includes(userNumber)) {
    alert ('Угадал');
} else {
    alert ('Не угадал');q
}