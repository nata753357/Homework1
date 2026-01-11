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
    let operators = ['+', '-', '*', '/'];
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
            userAnswer = prompt(`Сложите ${a} и ${b}`);
            result = a + b;
            break;

        case '-':
            userAnswer = prompt(`Вычтите ${a} и ${b}`);
            result = a - b;
            break;

        case '*':
            userAnswer = prompt(`Умножьте ${a} и ${b}`);
            result = a * b;
            break;

        case '/':
            userAnswer = prompt(`Разделите ${a} на ${b}`);
            result = a / b;
            break;
    }

     if (userAnswer === null) {
        alert("Игра отменена");
        return;
     } else {

    let number = +userAnswer;

    if (isNaN(number)) {
        alert ("Введено не число");
        return;
    }

    if (number === result) {
        alert(`Верно!`);
    } else {
        alert(`Не верно!`);
    }
    }
 }

 function startGame3() {
    let text = prompt('Введите текст');
    let reverseText = text.split('').reverse().join('');
        alert (reverseText);
 }

 function startGame5() {
    const quiz = [
        {
            question: "Какой цвет неба?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2,
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        },
        {
             question: "Сколько дней в году?",
            options: ["1. 500", "2. 365", "3. 400"],
            correctAnswer: 2  
        }
    ];


let score = 0;

for (let i = 0; i < quiz.length; i++) {
    let questionText = `Вопрос ${i + 1}: ${quiz[i].question}\n\n`;
    questionText += quiz[i].options.join('\n');
    
    let userAnswer = prompt(questionText);
    
    if (parseInt(userAnswer) === quiz[i].correctAnswer) {
        score++
    }
}

alert(`Викторина завершена!\nВы ответили правильно на ${score} из ${quiz.length} вопросов.`);

}
       

   


    


 


      
    
 
 

    
 


    

    