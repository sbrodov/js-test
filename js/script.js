
// let a = 1 && 2;
// let b = 3 || 4;

/* ================================ */



let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        // yourLastMovie: yourLastMovieRate
    },
    actors: {},
    genres: [],
    privat: false
};


let a = prompt('Один из последних просмотренных фильмов?', '');
let b = +prompt('На сколько оцените его?', '');
let c = prompt('Один из последних просмотренных фильмов?', '');
let d = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;



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