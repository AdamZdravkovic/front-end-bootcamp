(function () {
    "use strict";

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
    };

    function Person(name, surname, birthday) {
        this.name = name;
        this.surname = surname;
        this.birthday = birthday;
        this.getData = function () {
            const formattedDate = this.birthday.toLocaleDateString("sr-RS");
            const shortDate = formattedDate.slice(0, -5) + this.birthday.getFullYear().toString().slice(-2);
            return this.name + ", " + this.surname + ", " + shortDate;

        };
    };

    function Player(person, amount, country) {
        this.person = person;
        this.amount = amount;
        this.country = country;
        this.getProfile = function(){
            const totalAmount = (this.country.odds * this.amount).toFixed(2);
            const today = new Date();
            const birthYear = this.person.birthday.getFullYear();
            const age = today.getFullYear() - birthYear;
            return this.country.name + ", " + totalAmount + " eur, " + this.person.name + ", " + this.person.surname + ", " + age + " years";
        };
    };

    function Address(country, city, postal, street) {
        this.country = country;
        this.city = city;
        this.postal = postal;
        this.street = street;
        this.getAddress = function() {
            return this.street + ", " + this.postal + this.city + ", " + this.country;
        };
    };

    function BettingPlace(address, players) {
        this.address = address;
        this.players = [];
        this.getData = function() {
            const parts = this.address.street.split(" ");
            parts.pop();
            const streetName = parts.join(" ");
            let totalBets = 0;

            for (var i = 0; i < this.players.length; i++) {
                totalBets += this.players[i].amount;
            };

            return streetName + ", " + this.address.postal + " " + this.address.city + ", sum of all bets: " + totalBets + "eur";
        };
        this.addPlayer = function(player) {
            this.players.push(player);
        };
    };

    function BettingHouse(competition, places, volume) {
        this.competition = competition;
        this.places = [];
        this.volume = 0;
    };

    const Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        NORTH_AMERICA: "NA",
        SOUTH_AMERICA: "SA",
        AUSTRALIA: "AU"
    });

    function createPlayer(name, surname, birthday, betAmount, country) {
        let person = new Person(name, surname, birthday);
        let player = new Player(person, betAmount, country);
        return player;
    };

    function createBettingPlace(country, city, postal, street) {
        let address = new Address(country, city, postal, street);
        let place = new BettingPlace(address);
        return place;
    };

    const bettingHouse = new BettingHouse("Football World Cup Winner");

    const serbia = new Country("Serbia", 2.0, Continent.EUROPE);
    const brazil = new Country("Brazil", 3.0, Continent.SOUTH_AMERICA);
    const italy = new Country("Germany", 2.5, Continent.EUROPE);

    const player1 = createPlayer("Pera", "Peric", new Date(1995, 4, 15), 1050, serbia);
    const player2 = createPlayer("Danilo", "Stankovic", new Date(1992, 7, 22), 1200, brazil);
    const player3 = createPlayer("Milos", "Stanic", new Date(1989, 1, 5), 800, italy);
    const player4 = createPlayer("Ivan", "Dimitrovic", new Date(1998, 10, 3), 950, serbia);

    const place1 = createBettingPlace("Serbia", "Belgrade", 11000, "Nemanjina 4");
    const place2 = createBettingPlace("Serbia", "Belgrade", 11000, "Kralja Milana 10");

    bettingHouse.places.push(place1, place2);

    place1.players.push(player1, player2);
    place2.players.push(player3, player4);

    bettingHouse.volume = place1.players.length + place2.players.length;

    let serbiaBets = 0;
    bettingHouse.places.forEach(function (place) {
    place.players.forEach(function (player) {
        if (player.country.name === "Serbia") {
            serbiaBets++;
           }
     });
    });

    console.log(bettingHouse.competition + ", " + bettingHouse.places.length + " betting places, " + bettingHouse.volume + " bets");

    bettingHouse.places.forEach(function (place) {
        console.log("    " + place.address.street + ", " + place.address.postal + " " + place.address.city + ", sum of all bets: " +
            place.players.reduce(function (sum, p) { return sum + p.amount; }, 0) + "eur");
    
        place.players.forEach(function (player) {
            var age = new Date().getFullYear() - player.person.birthday.getFullYear();
            var winAmount = (player.amount * player.country.odds).toFixed(2);
            console.log("        " + player.country.name.slice(0, 2).toUpperCase() + ", " + winAmount + " eur, " +
                player.person.name + " " + player.person.surname + ", " + age + " years");
        });
    });
    
    console.log("There are " + serbiaBets + " bets on Serbia");

})();