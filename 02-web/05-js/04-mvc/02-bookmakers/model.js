const Continent = Object.freeze({
  EUROPE: "EUROPE",
  ASIA: "ASIA",
  NORTH_AMERICA: "NORTH_AMERICA",
  SOUTH_AMERICA: "SOUTH_AMERICA",
  AFRICA: "AFRICA",
  AUSTRALIA: "AUSTRALIA",
});

class Country {
  constructor(name, odds, continent) {
    if (typeof name !== "string" || !name.trim())
      throw new Error("Country name required");
    if (typeof odds !== "number" || !Number.isFinite(odds) || odds <= 0)
      throw new Error("Odds must be a positive number");
    if (!Object.values(Continent).includes(continent))
      throw new Error("Invalid continent");

    this.name = name;
    this.odds = odds;
    this.continent = continent;
  }
}

class Person {
  constructor(name, surname, birthday) {
    if (!(birthday instanceof Date) || isNaN(birthday))
      throw new Error("Birthday must be a valid Date");

    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
  }

  getData() {
    const day = String(this.birthday.getDate()).padStart(2, "0");
    const month = String(this.birthday.getMonth() + 1).padStart(2, "0");
    const year = String(this.birthday.getFullYear()).slice(-2);

    return `${this.name} ${this.surname}, ${day}.${month}.${year}`;
  }
}

class Player {
  constructor(person, amount, country) {
    if (!(person instanceof Person))
      throw new Error("Invalid person: must be an instance of Person");
    if (!(country instanceof Country))
      throw new Error("Invalid country: must be an instance of Country");
    if (typeof amount !== "number" || !Number.isFinite(amount) || amount <= 0)
      throw new Error("Bet amount must be a positive number");

    this.person = person;
    this.amount = amount;
    this.country = country;
  }

  getData() {
    const now = new Date();
    const dob = this.person.birthday;
    let age = now.getFullYear() - dob.getFullYear();
    const beforeBirthday =
      now.getMonth() < dob.getMonth() ||
      (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate());
    if (beforeBirthday) age--;

    const expected = (this.country.odds * this.amount).toFixed(2);

    return `${this.country.name}, ${expected} eur, ${this.person.name} ${this.person.surname}, ${age} years`;
  }
}

class Address {
  constructor(country, city, postal, street, number) {
    if (typeof postal !== "number" || !Number.isInteger(postal) || postal < 0)
      throw new Error("Postal must be a non-negative integer");
    if (typeof number !== "number" || !Number.isInteger(number) || number <= 0)
      throw new Error("Street number must be a positive integer");

    this.country = country;
    this.city = city;
    this.postal = postal;
    this.street = street;
    this.number = number;
  }

  getData() {
    return `${this.street} ${this.number}, ${this.postal} ${this.city}, ${this.country}`;
  }
}

class BettingPlace {
  constructor(address) {
    if (!(address instanceof Address))
      throw new Error("BettingPlace needs an Address");

    this.address = address;
    this.listOfPlayers = [];
  }

  getData() {
    let totalBets = 0;
    for (let i = 0; i < this.listOfPlayers.length; i++) {
      totalBets += this.listOfPlayers[i].amount;
    }

    return `${this.address.street}, ${this.address.postal} ${this.address.city}, sum of all bets: ${totalBets}eur`;
  }

  addPlayer(player) {
    if (!(player instanceof Player))
      throw new Error("addPlayer expects a Player");
    this.listOfPlayers.push(player);
  }
}

class BettingHouse {
  constructor(competition) {
    this.competition = competition;
    this.listOfBettingPlaces = [];
  }

  getData() {
    let result = `${this.competition},`;
    const bettingPlacesCount = this.listOfBettingPlaces.length;
    const betsCount = this.listOfBettingPlaces.reduce(
      (acc, bp) => acc + bp.listOfPlayers.length,
      0
    );
    result += ` ${bettingPlacesCount} betting places, ${betsCount} bets placed.`;
    return result;
  }
}

const bettingHouse = new BettingHouse("Champions League");
const allCountries = [];

export function createCountry(name, odds, continent) {
  let country = new Country(name, odds, continent);
  allCountries.push(country);
  return country;
}

export function createPerson(name, surname, birthday) {
  let person = new Person(name, surname, birthday);
  return person;
}

function createPlayer(name, surname, birthday, betAmount, country) {
  let person = new Person(name, surname, birthday);
  let player = new Player(person, betAmount, country);
  return player;
}

function createBettingPlace(country, city, postal, street, number) {
  let address = new Address(country, city, postal, street, number);
  let bettingPlace = new BettingPlace(address);
  return bettingPlace;
}

export const getBettingHouseData = function () {
  return bettingHouse.getData();
};
