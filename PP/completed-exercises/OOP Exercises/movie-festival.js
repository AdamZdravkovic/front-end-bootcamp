(function () {
    "use strict";

    // Constructor function for Genre
    function Genre(name) {
        this.name = name;
        // Returns a short genre code made up of first and last letter (capitalized)
        this.getData = function() {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        };
    };

    // Constructor function for Movie
    function Movie(title, genre, length) {
        // Validate that the length is a number
        if (typeof length === "string") {
            throw new Error("Movie length needs to be a number.");
        };

        this.title = title;
        this.genre = genre;
        this.length = length;

        // Returns formatted movie info
        this.getData = function() {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`;
        };
    };

    // Constructor function for Program (e.g. daily movie schedule)
    function Program(date, amount) {
        this.date = date; // Date the program is scheduled for
        this.list = [];   // List of movies in the program
        this.amount = amount;

        // Adds a movie to the program with two constraints:
        // - No more than 4 movies of the same genre
        // - Total duration must not exceed 480 minutes
        this.addMovie = function(movie) {
            let genreCount = 0;
            let totalDuration = 0;

            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].genre.name === movie.genre.name) {
                    genreCount++;
                };
                totalDuration += this.list[i].length;
            };

            if (genreCount >= 4) {
                console.log(`Cannot add more than 4 movies of the genre "${movie.genre.name}"`);
                return;
            };

            if (totalDuration + movie.length > 480) {
                console.log(`Total movies length exceeds 480 minutes`);
                return;
            };

            return this.list.push(movie);
        };

        // Returns formatted data for the program
        this.getData = function() {
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

            return `${displayDate}, program duration ${programLengthTotal}min\n` + listTotalOfAllMovies.join('\n');
        };
    };

    // Constructor function for Festival
    function Festival(name, amountTotal) {
        // Validate that the total movie amount is a number
        if (typeof amountTotal === "string") {
            throw new Error("Error! For total amount of movies you need to use a number.");
        };

        this.name = name;
        this.listTotal = []; // List of all programs
        this.amountTotal = amountTotal;

        // Adds a program to the festival if the total movie limit is not exceeded
        this.addProgram = function(program) {
            let totalMovies = 0;

            for (let i = 0; i < this.listTotal.length; i++) {
                totalMovies += this.listTotal[i].list.length;
            };

            if (totalMovies + program.list.length > this.amountTotal) {
                console.log(`Cannot add program: total number of movies would exceed the limit of ${this.amountTotal}.`);
                return;
            };

            this.listTotal.push(program);
        };

        // Returns formatted data for the entire festival
        this.getData = function() {
            if (this.listTotal.length === 0) {
                return `${this.name} festival\n\tProgram to be announced`;
            };

            let totalMovies = 0;
            let programDataList = [];

            for (let i = 0; i < this.listTotal.length; i++) {
                const program = this.listTotal[i];
                totalMovies += program.list.length;
                programDataList.push(program.getData());
            };

            return `${this.name} festival has ${totalMovies} movie titles\n` + programDataList.join('\n');
        };
    };

    // Helper function to create a Movie instance
    function createMovie(title, length, genreName) {
        const genre = new Genre(genreName);
        const movie = new Movie(title, genre, length);
        return movie;
    };

    // Helper function to create a Program instance
    function createProgram(date) {
        const program = new Program(date);
        return program;
    };

    // Example usage
    const festival = new Festival("Weekend", 4); // Festival with a limit of 4 movies total

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

    console.log(festival.getData()); // Display full festival data
})();