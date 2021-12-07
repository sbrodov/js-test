/* ================================================= Операторы ================================================= */

console.log('string' * 9); //NaN
console.log('string' + '- object'); //string - object
console.log(10 + '5'); //105 - Конкатинация
console.log(4 + +'5'); //9 - унарный плюс


//Инкрименты и декрименты, префиксная форма и постфиксная

let incr = 10;
let decr = 10;


console.log(++incr); //11 префиксная форма, сразу возвращает новое значение
console.log(--decr); //9 префиксная форма, сразу возвращает новое значение

console.log(incr++); //10 постфиксная форма, сначала возвращает старое значение и после увеличивает значение
console.log(decr--); //10 постфиксная форма, сначала возвращает старое значение и после уменьшает значение


console.log(2*4 == '8'); //true - сравниваем только по значению
console.log(2*4 === '8'); //false - строгое сравнение по типу


//Операторы "И" и "ИЛИ"

//&& - возвращает первое ложное значение или последнее если такое не найдено

console.log(2 && 5); //(преобразует значения в логический тип) 5 - оба true, возвращает последнее
console.log(4 && 0); //(преобразует значения в логический тип) 0 - так как 0 - false
const isChecked = true;
const isClosed = true;
console.log(isChecked && isClosed); // true так как оба выражения верны (возвращает правду только если оба элемента будут правдивы) И это правда И это правда
const isBlocked = true;
const isHidden = false;
console.log(isBlocked && isHidden); // false

//|| - возвращает первое истинное значение или последнее если такое не найдено

console.log(3 || 5); //(преобразует значения в логический тип) 3 - первое истинное
console.log(0 || 6); //(преобразует значения в логический тип) 6 - первое истинное
console.log(undefined || 0); //(преобразует значения в логический тип) 0 - оба false, возвращает последнее
const isVisible = true;
const isColored = false;
console.log(isVisible || isColored); // true так как хотя бы один элемент правдив ИЛИ это правда ИЛИ это правда ИЛИ это правда
const isBordered = false;
const isDisabled = false;
console.log(isBordered || isDisabled); // false - не один элемент не правдив


/* ===================================== Простое общение с пользователем ===================================== */

const result = confirm("Are you here?");

const answer = prompt("Вам есть 18?", "");

console.log(typeof(answer)); //Оператор typeof который проверят тип данных

const answers = [];

answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

/* ================================================= Методы строк и чисел ================================================= */

//Методы - это вспомогательные функции
//Свойства - это вспомогательные значения

let someStr = 'test';
let someArr = [1, 2, 3];

//.lenght свойство возвращает длину
console.log(someStr.length); //4 - возвращает длину строки
console.log(someArr.length); //3 - возвращает количество элементов массива

console.log(someStr[2]); //s - получаем третий символ, нумерация начинается с 0

//============================ Методы строк ============================//

//toUpperCase() .toLowerCase() методы переводят строку в верхний и нижний регистр
console.log(someStr.toUpperCase()); //TEST возвращает новое значение
console.log(someStr); //test
console.log(someStr.toLowerCase()); //test

//infexOf метод позоволяет узнать с какого индекса начинается указанный кусок
let fruits = 'fructosis';
console.log(fruits.indexOf('ctosis')); //3 - начинается с позиции 3; нумерация с 0


let log = 'Hello World';
//.slice(3, 7) метод вырезает кусок строки, начало и конец (не включая)
//.slice(3) или один аргумент, начало и до конца
console.log(log.slice(6, 10)); //Worl - до какой-то позиции но не включая её, нужно 11

//.substring() метод, почти тоже самое что .slice()
console.log(log.substring(6, 10));

//.substr(6, 5) метод, начало и сколько символов надо вырезать
console.log(log.substr(6, 5)); //World - вырезало 5 символов с 6 позиции


//============================ Методы чисел ============================//


//Math.round() округление до ближайшего целого
const someNum = 12.3;
console.log(Math.round(someNum)); //12

//parseInt() перевод из одной системы счисления в другую
const someNum2 = '12.3px';
console.log(parseInt(someNum2)); //12 - перевело строку в число


//parseFloat() перевод из одной системы счисления в другую
const someNum3 = '12.3px';
console.log(parseFloat(someNum3)); //12 - перевело строку в число с плавающей точкой


/* ================================================= Условия ================================================= */


const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Error');
} else {
    console.log('Ok');
}

(num ===  50) ? console.log('Error') : console.log('Ok');

switch (num) {
    case 49: 
        console.log('Error');
        break;
    case 100:
        console.log('Error');
        break;
    case 50:
        console.log('Ok');
        break;
    default:
        console.log('Not in this time');
        break;
}


/* ================================================= Циклы ================================================= */

let whileNum = 50;

while (whileNum <= 55) {
    console.log(whileNum);
    whileNum++;
}


let doWhileNum = 50;

do {
    console.log(doWhileNum);
    doWhileNum++;
} while (doWhileNum <= 50);



let forNum = 50;
   //начало    условие  шаг
for (let i = 0; i < 8; i++) {
    console.log(forNum); //тело
    forNum++;
} //начало -> условие -> тело - шаг -> условие -> тело -> шаг -> условие -> тело -> шаг


/* ================================================= Функции ================================================= */

let testNum = 30; //глобальная переменная, может быть перезаписана локальной

function showFirstMessage(text) {
    console.log(text);
    let testNum = 20; //локальная переменная, снаружи не доступна
}

showFirstMessage("Hello");
console.log(testNum);


//Замыкание - это сама функция, вместе со всеми внешними переменными которые ей доступны

function calc(a, b) {
    return (a + b); //return возвращает результат во внешний мир и функция прекращает свое выполнение
    console.log("Tested"); //unreachable из-за return
}

console.log(4, 7);


//function declaration создается до начала выполнения скрипта, можно вызвать перед объявлением
function foo1() {
    //код
}

//function expression создается только тогда, когда доходит поток кода, можно вызвать только после объявления
let foo2 = function() {
    //код
};

//стрелочная
let foo3 = (a, b) => {return (a + b)};



/* ================================================= Callback-функции ================================================= */

//Callback-функция - это функция, которая должна быть выполнена после того как другая функция завершила свое выполнение

function learnJS(lang, callbackfunction) {
    console.log(`I learn: ${lang}`);
    callbackfunction();
}

function done() {
    console.log('test');
}

learnJS('JS', done); //передаем функцию done по ссылке (чтобы потом её использовать)

//Соблдюдается последовательность, сначала выполняется функция learnJs() которая запускает выполнение функции done() в виде callback



/* =========================================== Классификация типов =========================================== */

//============================ Объекты ============================//

//Объекты - коллекция данных, структуры которые исопльзуются для хранения любых данных

const obj = {
    name: 'John', //ключ: значение, вместе свойство
    age: 25,
    isMarried: false
};

console.log(obj.name); //John - обратились к значению John свойства name
console.log(obj["name"]); //John



const options = {
    name: 'test',
    height: 100,
    weight: 200,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //метод makeTest
        console.log('rrr');
    }
};

options.makeTest();


delete options.name; //оператор delete удаляет свойство из объекта


//for in перебор свойств у объекта

for (let key in options) {
    console.log(`Свойство ${key} имеет значение ${options[key]}`); // ${key} получаем ключ, ${options[key] получаем значение ключа
}


//Деструктуризация объекта - позволяет вытаскивать элементы в качестве отдельных структур и как-то с ними взаимодействовать

const {bg, border} = options.colors; //Деструктурируем на мелкие куски bg и border из options.colors
console.log(border); //black - деструктуризация удалась

//================ Методы отъектов ================//

//Object.keys() метод берет объект и на его основании создает массив в котором все элементы это ключи
console.log(Object.keys(options)); // [ 'name', 'height', 'weight', 'colors', 'makeTest' ] - массив со всеми ключами
console.log(Object.keys(options).length); // 5 - получаем количество элементов в массиве


//====== Передача по ссылке и по значению ======//


const newObj = {
    a: 1,
    b: 10
};

const copyNewObj = newObj; //передача не всей структуры, а только ссылки на неё

console.log(newObj); //{ a: 1, b: 10 }
console.log(copyNewObj); //{ a: 1, b: 10 }


copyNewObj.a = 2;

console.log(newObj); //{ a: 2, b: 10 } свойство a поменялось и там и там, так как мы не создавали копию
console.log(copyNewObj); //{ a: 2, b: 10 } свойство a поменялось и там и там, так как мы не создавали копию


//Функция с циклом для поверхностного клонирования объектов

function copy(mainObj) {
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers); //{ a: 10, b: 5, c: { x: 10, y: 4 } } создали поверхностную копию
console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 } }

//Object.assign() соединяет сразу несколько объектов

const add = {
    d: 17,
    e: 20
};

      //объект в который помещаем  //объект который помещаем
console.log(Object.assign(numbers, add)); //{ a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 } так же создалась поверхностная независимая копия

const clone = Object.assign({}, add); //создаем пустой объект в который помещаем объект add
clone.d = 20;

console.log(add); //{ d: 17, e: 20 }
console.log(clone); //{ d: 20, e: 20 } получаем независимую копию


//spread-оператор

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; //создаем поверхностную копию с помощью spread-оператора



//============================ Массивы ============================//

//Массивы - структуры которые содержат элементы по порядку


               //0          //1     //2 //3  //4
let arr = ['apple.jpg', 'orange.png', 6, {}, []];
console.log(arr[2]); //6



//================ Методы массивов ================//

const anotherArr = [2, 3, 4, 6, 8];

anotherArr.pop(); //метод pop() удаляет последний элемент [2, 3, 4, 6]
anotherArr.push(10); //метод push() добавляет элемент в конец массива [2, 3, 4, 6, 8, 10]

//перебор массива

for (let i = 0; i < anotherArr.length; i++) { //перебор будет совершаться пока не закончатся элементы внутри массива
    console.log(anotherArr[i]); //2 3 4 6 8
}

for (let value of anotherArr) {
    console.log(value); //2 3 4 6 8 тоже самое
}

//метод forEach() позволяет гибко перебрать все элементы внутри массива
anotherArr.forEach(function(item, index, arr) { //item - элемент которые перебираем; index - номер элемента; arr - ссылка на массив который перебираем
    console.log(`${index}: ${item} внутри массива ${arr}`); //"0: 2 внутри массива 2,3,4,6,8" и т.д.
});

//методы перебора и ТРАНСФОРМАЦИИ массивов
//arr.map
//arr.every/some
//arr.filter
//arr.reduce


const anotherStr = prompt("", "");
const products = anotherStr.split(", "); //метод split() превращает строку в массив с заданным разделителем
products.sort(); //метод sort() сортировка массива по алфавиту, если не передавать функцию сравнения - сортирует элементы как строки
console.log(products.join("; ")); //метод join() превращает массив в строку с заданным разделителем


const arrNums = [2, 13, 26, 8, 10];

arrNums.sort(compareNum); //передаем callback-функцию

function compareNum (a, b) {
    return a - b;
}

console.log(arrNums); //[ 2, 8, 10, 13, 26 ]



//================ Псевдомассивы ================//

//Когда мы работаем с элементами на странице то мы получаем псевдомассивы
//Псевдомассив - это такой объект структура которого совпадает со структурой массива, но у таких массив нету никаких методов

//====== Передача по ссылке и по значению ======//

const oldArray = ['a', 'b', 'c']
//const newwArray = olddArray - в newArray положиться ссылка на oldArray !
const newArray = oldArray.slice(); //создаем копию

newArray[1] = 'asdasddsa'
console.log(newArray); //[ 'a', 'asdasddsa', 'c' ]
console.log(oldArray); //[ 'a', 'b', 'c' ] 2 разных массива


//spread-оператор

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook']; //...вытаскиваем элементы из video и blogs и помещаем в internet

console.log(internet); //[
                        //  'youtube',
                        // 'vimeo',
                        //  'rutube',
                        //  'wordpress',
                        //  'livejournal',
                        //  'blogger',
                        // 'vk',
                        //  'facebook'
                        //]
const array = ['a', 'b'];
const newAraay = [...array]; //создаем поверхностную копию с помощью spread-оператора





/* =========================================== ООП =========================================== */


const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};

//Устаревший формат

//__proto__

john.__proto__ = soldier; //Установили прототипом Джона солдата

console.log(john.armor); //100 получил свойство из своего прототипа

john.sayHello(); //Hello взял метод из своего прототипа 

//Новый формат

//Object.setPrototypeOf устанавливает прототип

//объект которому назначаем прототип //объект прототип которого мы устанавливаем
Object.setPrototypeOf(john, soldier) //установили прототип Джону от солдата


//Object.create - создает объект с определенным прототипом

const billy = Object.create(soldier); //создаем новый прототип billy который будет наследоваться от soldier


//Object.getPrototypeOf получает этот прототип 










































//Какое будет выведено значение: let x = 5; alert( x++ ); ?
//

//Чему равно такое выражение: [ ] + false - null + true ?
//

//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//

//Чему равна сумма [ ] + 1 + 2?
//

//Что выведет этот код: alert( "1"[0] )?

//Чему равно 2 && 1 && null && 0 && undefined ?
//

//Есть ли разница между выражениями? !!( a && b ) и (a && b)?

//Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
//

//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?


//Что выведет этот код: alert( +"Infinity" ); ?

//Верно ли сравнение: "Ёжик" > "яблоко"?

//Чему равно 0 || "" || 2 || undefined || true || falsе ?
//