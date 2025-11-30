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
    arr2.push(1);
     }
    arr0.push(arr2);
 }

 console.log(arr0);

// Задание 5

 const arr1 = [1, 1, 1];
 arr1.push (2, 2, 2);
 console.log (arr1);

// Задание 6

let arr3 = [9, 8, 7, 'a', 6, 5];  
arr3.sort();  
arr3 = arr3.filter(item => typeof item === 'number');  
console.log(arr3);

// Задание 7

  const arr4 = [9, 8, 7, 6, 5];

  const userNumber = +prompt ('Введите число');
  if (arr4.includes(userNumber)) {
      alert ('Угадал');
  } else {
      alert ('Не угадал');
  }

// Задание 8

  let str = 'abcdef';
  str = str.split ('');
  console.log (str);
  str.reverse();
  str = str.join ('');
  console.log (str);

// Задание 9

const array1 = [[1, 2, 3], [4, 5, 6]];  
const result = array1.flat();  
console.log(result); 

// Задание 10

 const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 for (let i = 0; i < arr6.length; i ++) {
     if (arr6 [i + 1] ){
         console.log (arr6 [i] + arr6 [i + 1]);
     }
 }

// Задание 11

 function square (arr7) {
     return arr7.map(item => item ** 2);
 }
 console.log (square([1, 2, 3]));

// Задание 12

 function getLength (arr8) {
     return arr8.map(item => item.length);
 }
 console.log (getLength(['hi', 'world']));

// Задание 13

 function negativeNumbers (array) {
     return array.filter(item => item < 0);
 }
 console.log (negativeNumbers([1, 2, 3, -4, 5, -6, 7, 8, 9, 10]));

// Задание 14

    const originalArray = [];  
    for (let i = 0; i < 10; i++) {  

    originalArray.push(Math.floor(Math.random() * 10));  
}  
    const evenNumbers = originalArray.filter(number => number % 2 === 0);  
  
    console.log(originalArray);  
    console.log(evenNumbers);  

// Задание 15

  function randomNumber() {
      return Math.floor (Math.random () * 10);
  }
  const arr10 = [];

  for (let i = 0; i < 6; i++) {
      arr10.push (randomNumber());
  }
  console.log(arr10);

  console.log(arr10.reduce ((a,b) => a + b) / arr10.length);
