// Задание 1

//  function min(a,b) {
//      if (a < b){
//          return a;
//      } else {
//          return b;
//      }
//  }

// console.log(min(8,4));
// console.log(min(6,6));

// Задание 2

//  function isEven(n) {
//  if (n % 2 === 0){
//     return 'Число четное';
//  } else {
 //    return 'Число нечетное';
//  }
 // }

// console.log (isEven(2));
// console.log (isEven(3));

 // Стрелочная функция

// const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

// console.log (isOdd(5));
// console.log (isOdd(4));


 // Задание 3

 // function square(number) {
 //   console.log(number ** 2);
 // }

 // const up = (n) => n ** 2;

 // square (5);
 // console.log (up (5));

  // Задание 4

 //  function age (){
 //    let age = prompt ('Сколько тебе лет');

 //    if (age < 0){
 //        alert ('Возраст не может быть отрицательным');
 //    } else if (age >= 0 && age <= 12) {
 //        alert ('Привет, друг!');
  //   } else if (age >= 13) {
 //        alert ('Добро пожаловать');
 //    } else {
 //        alert ('Вы ввели неправильное значение');
 //    }
 //  }

 //    age ();

// Задание 5 

    function calc(a,b) {
        console.log (isNaN (a));
        console.log (isNaN (b));

     if (isNaN (a) || isNaN (b)) {
        return 'Одно или оба значения не является числом';
    } else {
        return a + b;
    }
    } 
        console.log (calc (5,2));

    // Задание 6

    


