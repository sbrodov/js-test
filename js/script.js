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