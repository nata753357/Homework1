let whatNumber = prompt('Угадай число');

{
    if (whatNumber > 0 && whatNumber < 50) {
        alert('Заданное число больше');
    } else if (whatNumber > 52 && whatNumber < 100){
        alert('Заданное число меньше');
    } else if (whatNumber !== 51) {
        alert('Угадал');
    } else {
        alert('Не понимаю');
    }
}