let personalMovieDB = {
    count: 0,
    movies: {
        // yourLastMovie: yourLastMovieRate
    },
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat != true) {
            console.log(personalMovieDB);
            console.log('TESSSSSSSSSSST');
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == null || genre == '') {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        let gengresList = personalMovieDB.genres;
        gengresList.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один из последних просмотренных фильмов?', '');
            let b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log('Вы киноман1111');
        } else {
            console.log('Ошибка');
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
            console.log(personalMovieDB.privat);
        } else {
           personalMovieDB.privat = true;
           console.log(personalMovieDB.privat);
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.showMyDB();
//personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
//personalMovieDB.toggleVisibleMyDB();