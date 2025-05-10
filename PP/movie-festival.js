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
        return this.listTotal.push(program);
    };
    this.getData = function() {
        let totalMovies = 0;

        for (let i = 0; i < this.listTotal.length; i++) {
            totalMovies += this.listTotal[i].list.length;
        };

        const programDate = this.listTotal.date;
        let programDuration = 0;

        for (let i = 0; this.listTotal.length; i++) {
            programDuration += this.listTotal.list.length;

        };
    };
};












})();