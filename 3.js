// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let x = prompt('Введите значение');
x = x.split('').reverse();
console.log(x.join(''));