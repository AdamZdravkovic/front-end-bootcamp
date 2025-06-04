(function () {
    "use strict";

    class Country {
        constructor(name, odds, continent) {
            this.name = name;
            this.odds = odds;
            this.continent = continent;
        }
    }

    class Person {
        constructor(name, surname, birthday) {
            this.name = name;
            this.surname = surname;
            this.birthday = birthday;
        }

        getData() {
            const formattedDate = this.birthday.toLocaleDateString("sr-RS");
            const shortDate = formattedDate.slice(0, -5) + this.birthday.getFullYear().toString().slice(-2);
            return `${this.name}, ${this.surname}, ${shortDate}`;
        }
    }

    class Player {
        constructor(person, amount, country) {
            this.person = person;
            this.amount = amount;
            this.country = country;
        }

        getProfile() {
            const totalAmount = (this.country.odds * this.amount).toFixed(2);

            const today = new Date();
            const birthYear = this.person.birthday.getFullYear();
            const age = today.getFullYear() - birthYear;

            return `${this.country.name}, ${totalAmount} eur, ${this.person.name}, ${this.person.surname}, ${age} years`;    
        }
    }

    class Address {
        constructor(country, city, postal, street) {
            this.country = country;
            this.city = city;
            this.postal = postal;
            this.street = street;
        }

        getAddress() {
            return `${this.street}, ${this.postal}${this.city}, ${this.country}`;
        }
    }

    class BettingPlace {
        constructor(address) {
            this.address = address;
            this.players = [];
        }

        getData() {
            const parts = this.address.street.split(" ");
            parts.pop();
            const streetName = parts.join(" ");

            let totalBets = 0;
            for (var i = 0; i < this.players.length; i++) {
                totalBets += this.players[i].amount;
            };

            return `${streetName}, ${this.address.postal} ${this.address.city}, sum of all bets: ${totalBets}eur`;
        }

        addPlayer(player) {
            this.players.push(player);
        }
    }

    class BettingHouse {
        constructor(competition) {
            this.competition = competition;
            this.places = [];
            this.volume = 0;
        }
    }

    const Continent = Object.freeze({
        ASIA: "AS",
        EUROPE: "EU",
        AFRICA: "AF",
        NORTH_AMERICA: "NA",
        SOUTH_AMERICA: "SA",
        AUSTRALIA: "AU"
    });

    const createPlayer = (name, surname, birthday, betAmount, country) => {
        const person = new Person(name, surname, birthday);
        return new Player(person, betAmount, country);
    };

    const createBettingPlace = (country, city, postal, street) => {
    const address = new Address(country, city, postal, street);
    return new BettingPlace(address);
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
    bettingHouse.places.forEach(place => {
    place.players.forEach(player => {
      if (player.country.name === "Serbia") {
        serbiaBets++;
      }
    });
    });

    console.log(`${bettingHouse.competition}, ${bettingHouse.places.length} betting places, ${bettingHouse.volume} bets`);

    bettingHouse.places.forEach(place => {
    const totalBets = place.players.reduce((sum, p) => sum + p.amount, 0);
    console.log(`    ${place.address.street}, ${place.address.postal} ${place.address.city}, sum of all bets: ${totalBets}eur`);

    place.players.forEach(player => {
      const age = new Date().getFullYear() - player.person.birthday.getFullYear();
      const winAmount = (player.amount * player.country.odds).toFixed(2);
      console.log(`        ${player.country.name.slice(0, 2).toUpperCase()}, ${winAmount} eur, ${player.person.name} ${player.person.surname}, ${age} years`);
    });
    });

    console.log(`There are ${serbiaBets} bets on Serbia`);
})();