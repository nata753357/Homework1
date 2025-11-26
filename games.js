      
  function startGame1() {
     let randomNumber = Math.floor(Math.random() * 100) + 1;
     while (true) {
         let guessNumber = prompt("Угадай число от 1 до 100");
         guessNumber = Number(guessNumber);
         if (guessNumber === randomNumber) {
             alert("Поздравляю, ты угадал число!");
             break;
         } else if (guessNumber > randomNumber) {
             alert("Твое число больше загаданного, попробуй еще!");
         } else {
             alert("Твое число меньше загаданного, попробуй еще!");
         }
     }
 }

 function startGame2 () {
    const operations = ['+', '-', '*', '/'];
    let operation = operations [Math.floor (Math.random () * operations.length)];
    //let a,b, result;
    //let userAnswer;

    a = Math.floor (Math.random () * 10) + 1;
    b = Math.floor (Math.random () * 10) + 1;

    switch (operation) {
        case '+':
        userAnswer = prompt (`Сложите ${a} и ${b}`);
        result = a + b;
        break;

        case '-':
        userAnswer = prompt (`Вычитание ${a} и ${b}`);
        result = a - b;
        break;

        case '*':
        userAnswer = prompt (` ${a} умножить на ${b}`);
        result = a * b;
        break;

        case '/':
        userAnswer = prompt (` ${a} разделить на ${b}`);
        result = a / b;
        break;
    }

    if (Number(userAnswer === result)) {
             alert(`Верно`);
         } else {
             alert(`Правильный ответ`);
         }
 }
 
