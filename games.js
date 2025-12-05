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
     
 function startGame2() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let a, b, result;
    let userAnswer;

    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * 10) + 1;

    if (operator === '/') {
        
        result = a * b; 
        a = result; 
        result = a / b; 
    }

    switch (operator) {
        case '+':
            userAnswer = +prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

        case '-':
            userAnswer = +prompt(`Вычтите ${a} и ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = +prompt(`Умножьте ${a} и ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = +prompt(`Разделите ${a} на ${b}`);
            result = a / b;
            break;
    }

    if (userAnswer === null) {
        alert("Игра отменена");
    } else {
       let userAnswerNumber = (userAnswer);
    
    if (userAnswerNumber === result) {
        alert('Верно!');
    } else {
        alert(`Ответ неверный: ${result}`);
    }
    }
 }


    

    