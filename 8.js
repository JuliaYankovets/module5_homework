// Создайте произвольный массив Map. 
// Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

let myMap = new Map();
myMap.set(4, 'Birthday');
myMap.set('Fenya', 'nameCat');
myMap.set(true, true);
myMap.set(null, NaN);

for (let [key, value] of myMap) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}