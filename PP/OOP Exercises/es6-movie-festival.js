(() => {
"use strict";

class Genre {
    constructor(name) {
        this.name = name;
    }

    getData() {
        return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    }
}

class Movie {
    constructor(title, genre, length) {
        if (typeof length === "string") {
            throw new Error("Movie length needs to be a number.");
        }

        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    getData() {
        return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
    }
}

class Program {
    constructor(date, amount) {
        this.date = date;
        this.list = [];
        this.amount = amount;
    }

    addMovie(movie) {
        let genreCount = 0;
        let totalDuration = 0;

        for (const m of this.list) {
            if (m.genre.name === movie.genre.name) genreCount++;
            totalDuration += m.length;
        }

        if (genreCount >= 4) {
            console.log(`Cannot add more than 4 movies of the genre "${movie.genre.name}"`);
            return;
        }

        if (totalDuration + movie.length > 480) {
            console.log("Total movies length exceeds 480 minutes");
            return;
        }

        return this.list.push(movie);
    }

    getData() {
        const formattedDate = new Date(this.date);
        const day = String(formattedDate.getDate()).padStart(2, '0');
        const month = String(formattedDate.getMonth() + 1).padStart(2, '0');
        const year = formattedDate.getFullYear();
        const displayDate = `${day}.${month}.${year}`;

        let programLengthTotal = 0;
        const listTotalOfAllMovies = this.list.map(movie => {
            programLengthTotal += movie.length;
            return `\t${movie.getData()}`;
        });

        return `${displayDate}, program duration ${programLengthTotal}min\n` + listTotalOfAllMovies.join('\n');
    }
}

class Festival {
    constructor(name, amountTotal) {
        if (typeof amountTotal === "string") {
            throw new Error("Error! For total amount of movies you need to use a number.");
        }

        this.name = name;
        this.listTotal = [];
        this.amountTotal = amountTotal;
    }

    addProgram(program) {
        let totalMovies = this.listTotal.reduce((sum, p) => sum + p.list.length, 0);

        if (totalMovies + program.list.length > this.amountTotal) {
            console.log(`Cannot add program: total number of movies would exceed the limit of ${this.amountTotal}.`);
            return;
        }

        this.listTotal.push(program);
    }

    getData() {
        if (this.listTotal.length === 0) {
            return `${this.name} festival\n\tProgram to be announced`;
        }

        let totalMovies = 0;
        const programDataList = this.listTotal.map(program => {
            totalMovies += program.list.length;
            return program.getData();
        });

        return `${this.name} festival has ${totalMovies} movie titles\n` + programDataList.join('\n');
    }
}

const createMovie = (title, length, genreName) => {
    const genre = new Genre(genreName);
    return new Movie(title, genre, length);
};

const createProgram = (date) => new Program(date);

const festival = new Festival("Weekend", 4);

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