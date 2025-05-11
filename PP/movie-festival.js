(function (){
"use strict";

function Genre(name) {
    this.name = name;
    this.getData = function() {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    };
};

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function() {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    };
};

function Program(date, amount) {
    this.date = date;
    this.list = [];
    this.amount = amount;
    this.addMovie = function(movie) {
        return this.list.push(movie);
    };
    this.getData = function(movie) {
        const formattedDate = new Date(this.date);
        const day = String(formattedDate.getDate()).padStart(2, '0');
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
        const year = formattedDate.getFullYear();
        const displayDate = `${day}.${month}.${year}`;


        let programLengthTotal = 0;
        let listTotalOfAllMovies = [];

        for (let i = 0; i < this.list.length; i++) {
            programLengthTotal += this.list[i].length;
            listTotalOfAllMovies.push(`\t${this.list[i].getData()}`);
        };
        
        return `${displayDate}, program length: ${programLengthTotal}min\n` + listTotalOfAllMovies.join('\n');


    };
};

function Festival(name, amountTotal) {
    this.name = name;
    this.listTotal = [];
    this.amountTotal = amountTotal;
    this.addProgram = function(program) {
        let genreCount = 0;

        return this.listTotal.push(program);
    };
    this.getData = function() {
        let totalMovies = 0;
        let programDataList = [];

        for (let i = 0; i < this.listTotal.length; i++) {
            const program = this.listTotal[i];
            totalMovies += this.listTotal[i].list.length;
            programDataList.push(this.listTotal[i].getData());

        };

        return `${this.name} festival has ${totalMovies} movie titles\n` + programDataList.join('\n');
    };
};

function createMovie(title, length, genreName) {
    const genre = new Genre(genreName);
    const movie = new Movie(title, genre, length);
    return movie;
};

function createProgram(date) {
    const program = new Program(date);
    return program;
};

const festival = new Festival("Weekend", 3);

const program1 = createProgram("2017-10-28");
const program2 = createProgram("2017-10-29");

const movie1 = createMovie("Spider-Man: Homecoming", 133, "action");
const movie2 = createMovie("War for the Planet of the Apes", 140, "drama");
const movie3 = createMovie("The Dark Tower", 95, "western");
const movie4 = createMovie("Deadpool", 108, "comedy");

program1.addMovie(movie1);
program1.addMovie(movie2);
program1.addMovie(movie3);
program2.addMovie(movie4);

festival.addProgram(program1);
festival.addProgram(program2);

console.log(festival.getData());
})();