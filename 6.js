// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. 
// Проверить, все ли элементы в массиве одинаковые.

let arr = [5, 5, 7];
let symbol = arr[0];
console.log(arr.every(element => { return element === symbol; }));