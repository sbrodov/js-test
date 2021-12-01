// let a = 1 && 2;
// let b = 3 || 4;



// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Error');
// } else {
//     console.log('Ok');
// }


// (num ===  50) ? console.log('Error') : console.log('Ok');

// switch (num) {
//     case 49: 
//         console.log('Error');
//         break;
//     case 100:
//         console.log('Error');
//         break;
//     case 50:
//         console.log('Ok');
//         break;
//     default:
//         console.log('Not in this time');
//         break;
// }



/* ================================ */



let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        // yourLastMovie: yourLastMovieRate
    },
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat != true) {
        console.log(personalMovieDB);
        console.log('TESSSSSSSSSSST');
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', '');
        let b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман1111');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);








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