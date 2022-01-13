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
//ЗАПИНАЕТСЯ НА ЛЖИ

console.log(2 && 5); //(преобразует значения в логический тип) 5 - оба true, возвращает последнее
console.log(4 && 0); //(преобразует значения в логический тип) 0 - так как 0 - false
const isChecked = true;
const isClosed = true;
console.log(isChecked && isClosed); // true так как оба выражения верны (возвращает правду только если оба элемента будут правдивы) И это правда И это правда
const isBlocked = true;
const isHidden = false;
console.log(isBlocked && isHidden); // false

//|| - возвращает первое истинное значение или последнее если такое не найдено
//ЗАПИНАЕТСЯ НА ПРАВДЕ

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


//spread-оператор (оператор разворота) разворачивает структуру и превращает её в набор каких-то данных

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

//Перебор массива

//метод for
for (let i = 0; i < anotherArr.length; i++) { //перебор будет совершаться пока не закончатся элементы внутри массива
    console.log(anotherArr[i]); //2 3 4 6 8
}

//метод for of
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


//метод split() превращает строку в массив с заданным разделителем

const anotherStr = prompt("", ""); //qqq, ddd, fff, zzz - вводим строки
const products = anotherStr.split(", ");
//получаем массив
//0: "qqq",
//1: "ddd",
//2: "fff"
//3" "zzz"



//метод join() превращает массив в строку с заданным разделителем

products.join("; "); // qqq, ddd, fff, zzz - вводим строки

//массив обратно склеиваем в строку с разделителем ;

//qqq; ddd; fff; zzz


//метод sort() сортировка массива по алфавиту, если не передавать функцию сравнения - сортирует элементы как строки

products.sort(); // qqq, aaa, bbb - вводим строки
//aaa; bbb; qqqq - все отсортировалось в алфавитном порядке




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
//const newwArray = olddArray - в newArray положится ссылка на oldArray !

//метод slice() позволяет создать копию массива 
const newArray = oldArray.slice();

newArray[1] = 'asdasddsa'
console.log(newArray); //[ 'a', 'asdasddsa', 'c' ]
console.log(oldArray); //[ 'a', 'b', 'c' ] 2 разных массива


//spread-оператор (оператор разворота) разворачивает структуру и превращает её в набор элементов

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



/* =========================================== Динамическая типизация =========================================== */


//To String

//1) команда String() старый метод

console.log(typeof(String(null))); //string то есть 'null'
console.log(typeof(String(4))); //string то есть '4'

//2) Конкатинация (что-то складываем со строкой)

console.log(typeof(6 + '')); //string

const anotherNum = 5;
console.log("https://vk.com/catalog/" + anotherNum); //https://vk.com/catalog/5

const fontSize = 26 + 'px';


//To Number

//1) команда Number() старый метод
console.log(typeof(Number('4'))); //number то есть 4

//2) унарный плюс 
console.log(typeof(+'4')); //number то есть 4

//3)
                          //значение //десятичная система
console.log(typeof(parseInt("15px", 10))); //number то есть 15

let answr = +prompt("Test", "");


//To Boolean

//0, '', null, undefined, NaN - false; все остальное - true (пустые массивы, пустые объекты, строки, ' ' и т.д.)


// 1)
let switcher = null;

if (switcher) {
    console.log('working');
} //не сработает потому что switcher = null (false);

switcher = 1;

if (switcher) {
    console.log('working');
} //сработает потому что switcher = 1 (true);


// 2) команда Boolean() старый метод
console.log(typeof(Boolean('4'))); //boolean

// 3) !!
console.log(typeof(!!"44444")); //boolean


/* =========================================== Получение элементов со страницы =========================================== */

//DOM - объектная модель документа, это представление HTML-документа в виде дерева тегов
//document - объект

//Получение элементов со страницы (методы):

document.getElementById('id'); //по айди


document.getElementsByTagName('button'); //по тэгу | получает псевдомассив (коллекцию)
document.getElementsByTagName('button')[2]; //нужно обратиться к определенному индексу; или let btns; btns[3]


document.getElementsByClassName('class'); //по классу | получает псевдомассив (коллекцию)
document.getElementsByClassName('class')[3]; //нужно обратиться к определенному индексу; или let btns; btns[3]

//Более новые

document.querySelectorAll('#id'); //по css селектору (айди, классы, вложенность классов, псевдоклассы (:visited), атрибуты ([name="value"]);
document.querySelectorAll('.class')[1];  //получает псевдомассив (коллекцию), //нужно обратиться к определенному индексу; или let btns; btns[1]
                                        //есть метод forEach();

document.querySelector('.class'); //по css селектору | получает самый первый элемент



/* =========================================== Действия с элементами на странице =========================================== */


const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle')
const hearts = document.querySelectorAll('.heart');
const oneHearth = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
const nnnum;


//inline-стили
box.style.backgroundColor = 'blue';
box.style.width = '500px';
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

box.style.cssText = 'background-color: blue; width: 500px';
box.style.cssText = `background-color: blue; width: ${nnnum}px`;


for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue'; //перебираем все сердца
}

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

//Методы

const div = document.createElement('div'); //внутрь помещаем название того тега который создаем
const textNode = document.createTextNode('Тут был я'); //внутрь помещаем нужный текст


//Свойство classList
div.classList.add('black'); //метод add() на свойстве classList


//Метод append()

document.body.append(div) //берем тег body как родителя и во внутрь в конец добавляем div
document.querySelector('.wrapper').append(div); //берем класс wrapper как родителя и во внутрь в конец добавляем div
wrapper.append(div); //берем класс wrapper как родителя и во внутрь в конец добавляем div

//Метод prepend()

wrapper.prepend(div); //берем класс wrapper как родителя и во внутрь в начало добавляем div


//Методы before() и after()

hearts[0].before(div); //вставляем div перед hearts[0]
hearts[0].after(div); //вставляем div после hearts[0]


//Метод remove()

circles[2].remove(); //удаляем circles[2]


//Метод replaceWith()

hearts[0].replaceWith(circles[0]); //заменяем hearts[0] на circles[0]

/* ======== Устаревшие конструкции ======== */

//Метод appendChild()

wrapper.appendChild(div); //берем класс wrapper как родителя и во внутрь в конец добавляем ddiv


//Метод insertBefore()

//какой элемент вставляем //перед каким элементом вставляем
wrapper.insertBefore(div, hearts[0]);


//Метод removeChild()

wrapper.removeChild(hearts[1]);

//Метод replaceChild();

//на какой элемент хотим поменять //тот элемент который меняется
wrapper.replaceChild(circles[0], hearts[1]); //берем hearts[1] и меняем на circles[0]

/* ====================================== */

div.innerHTML = "Hello"; //внутрь div помещаем текст
div.innerHTML = "<h1>Hello</h1>"; //внутрь div помещаем заголовок

div.textContent = "Hello"; //внутрь div помещаем текст (работает только текст)


//метод insertAdjacentHTML()

//элемент с которым будет производить действия //спец слово //какой html хотим вставить
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); 

//спец слова:
//beforebegin - вставить перед элементом
//afterbegin - вставить в начало элемента
//beforeend - вставить перед концом
//afterend - вставить после элемента









































































//Какое будет выведено значение: let x = 5; alert( x++ ); ?
//5

//Чему равно такое выражение: [ ] + false - null + true ?
//NaN

//Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
//2

//Чему равна сумма [ ] + 1 + 2?
//12 string

//Что выведет этот код: alert( "1"[0] )?
//1

//Чему равно 2 && 1 && null && 0 && undefined ?
//null

//Есть ли разница между выражениями? !!( a && b ) и (a && b)?
//false, !! превращает выражение в boolean

//Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
//3

//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//false

//Что выведет этот код: alert( +"Infinity" ); ?
//Infinity number

//Верно ли сравнение: "Ёжик" > "яблоко"?
//false

//Чему равно 0 || "" || 2 || undefined || true || falsе ?
//2