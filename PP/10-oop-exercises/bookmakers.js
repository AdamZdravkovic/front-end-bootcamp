(function () {
    "use strict";

    // Constructor for Country with name, odds, and continent properties
    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };

    // Constructor for Person with name, surname, and birthday
    function Person(name, surname, birthday) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;

        // Method to get formatted data about the person
        this.getData = function () {
            // Format date to Serbian locale string (dd.mm.yyyy)
            const formattedDate = this.birthday.toLocaleDateString("sr-RS");
            // Shorten the year to last two digits and create a short date format
            const shortDate = formattedDate.slice(0, -5) + this.birthday.getFullYear().toString().slice(-2);
            // Return string with name, surname, and short date
            return this.name + ", " + this.surname + ", " + shortDate;
        };
    };

    // Constructor for Player: combines a Person, bet amount, and a Country
    function Player(person, amount, country) {
        this.person = person;
        this.amount = amount;
        this.country = country;

        // Method to get player's betting profile as a string
        this.getProfile = function() {
            // Calculate potential winning amount = odds * bet amount, rounded to 2 decimals
            const totalAmount = (this.country.odds * this.amount).toFixed(2);

            // Calculate player's age from birthday
            const today = new Date();
            const birthYear = this.person.birthday.getFullYear();
            const age = today.getFullYear() - birthYear;

            // Return string with country name, total possible winnings, player name, surname, and age
            return this.country.name + ", " + totalAmount + " eur, " + this.person.name + ", " + this.person.surname + ", " + age + " years";
        };
    };

    // Constructor for Address with country, city, postal code, and street
    function Address(country, city, postal, street) {
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.street = street;

        // Method to get formatted full address string
        this.getAddress = function() {
            return this.street + ", " + this.postal + this.city + ", " + this.country;
        };
    };

    // Constructor for BettingPlace, holding address and a list of players who bet there
    function BettingPlace(address, players) {
        this.address = address;
        this.players = [];

        // Method to get formatted data about the betting place
        this.getData = function() {
            // Extract street name without the house number (last word)
            const parts = this.address.street.split(" ");
            parts.pop();
            const streetName = parts.join(" ");

            // Calculate total amount of all bets placed at this place
            let totalBets = 0;
            for (var i = 0; i < this.players.length; i++) {
                totalBets += this.players[i].amount;
            };

            // Return string with street name, postal code, city, and sum of bets
            return streetName + ", " + this.address.postal + " " + this.address.city + ", sum of all bets: " + totalBets + "eur";
        };

        // Method to add a player to the betting place
        this.addPlayer = function(player) {
            this.players.push(player);
        };
    };

    // Constructor for BettingHouse, holds competition name, list of places, and total volume of bets
    function BettingHouse(competition, places, volume) {
        this.competition = competition;
        this.places = [];
        this.volume = 0;
    };

    // Enum object for continents with fixed values
    const Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        NORTH_AMERICA: "NA",
        SOUTH_AMERICA: "SA",
        AUSTRALIA: "AU"
    });

    // Factory function to create a Player from name, surname, birthday, bet amount, and country
    function createPlayer(name, surname, birthday, betAmount, country) {
        let person = new Person(name, surname, birthday);
        let player = new Player(person, betAmount, country);
        return player;
    };

    // Factory function to create a BettingPlace from address details
    function createBettingPlace(country, city, postal, street) {
        let address = new Address(country, city, postal, street);
        let place = new BettingPlace(address);
        return place;
    };

    // Create a BettingHouse for a competition
    const bettingHouse = new BettingHouse("Football World Cup Winner");

    // Create some example countries with odds and continents
    const serbia = new Country("Serbia", 2.0, Continent.EUROPE);
    const brazil = new Country("Brazil", 3.0, Continent.SOUTH_AMERICA);
    const italy = new Country("Germany", 2.5, Continent.EUROPE);

    // Create example players with their bets
    const player1 = createPlayer("Pera", "Peric", new Date(1995, 4, 15), 1050, serbia);
    const player2 = createPlayer("Danilo", "Stankovic", new Date(1992, 7, 22), 1200, brazil);
    const player3 = createPlayer("Milos", "Stanic", new Date(1989, 1, 5), 800, italy);
    const player4 = createPlayer("Ivan", "Dimitrovic", new Date(1998, 10, 3), 950, serbia);

    // Create betting places with address info
    const place1 = createBettingPlace("Serbia", "Belgrade", 11000, "Nemanjina 4");
    const place2 = createBettingPlace("Serbia", "Belgrade", 11000, "Kralja Milana 10");

    // Add places to betting house
    bettingHouse.places.push(place1, place2);

    // Add players to places
    place1.players.push(player1, player2);
    place2.players.push(player3, player4);

    // Set total number of bets (volume) in betting house
    bettingHouse.volume = place1.players.length + place2.players.length;

    // Count how many bets are placed on Serbia
    let serbiaBets = 0;
    bettingHouse.places.forEach(function (place) {
        place.players.forEach(function (player) {
            if (player.country.name === "Serbia") {
                serbiaBets++;
            }
        });
    });

    // Output summary of the betting house
    console.log(bettingHouse.competition + ", " + bettingHouse.places.length + " betting places, " + bettingHouse.volume + " bets");

    // Output details for each betting place and the players who bet there
    bettingHouse.places.forEach(function (place) {
        // Output betting place address and sum of bets
        console.log("    " + place.address.street + ", " + place.address.postal + " " + place.address.city + ", sum of all bets: " +
            place.players.reduce(function (sum, p) { return sum + p.amount; }, 0) + "eur");

        // Output each player with country code, possible win, name, and age
        place.players.forEach(function (player) {
            var age = new Date().getFullYear() - player.person.birthday.getFullYear();
            var winAmount = (player.amount * player.country.odds).toFixed(2);
            console.log("        " + player.country.name.slice(0, 2).toUpperCase() + ", " + winAmount + " eur, " +
                player.person.name + " " + player.person.surname + ", " + age + " years");
        });
    });

    // Output total number of bets on Serbia
    console.log("There are " + serbiaBets + " bets on Serbia");

})();