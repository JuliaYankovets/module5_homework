// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, 
// но и, например, знаки, null и так далее.

let arr = [2, 0, 'lo', 5, 10, 25, 66, 'afbh', 101, 'null', ','];
let resultZero = arr.filter((item) => {
    return item === 0;
});
console.log('Количетво элементов равных нулю ' + resultZero.length);

let resultEven = arr.filter((item) => {
    if (typeof item === 'number', item !== 0) {
        return item % 2 === 0;
    }
});
console.log('Количество четных элементов: ' + resultEven.length);
let resultOdd = arr.filter((item) => {
    if (typeof item === 'number') {
        return item % 2 !== 0;
    }
});
console.log('Количество нечетных элементов: ' + resultOdd.length);
let resultNotNumber = arr.filter((item) => {
    return typeof(item) !== 'number';
});
console.log('Количество не числовых элементов: ' + resultNotNumber.length);