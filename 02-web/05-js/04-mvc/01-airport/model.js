"use strict";

const dataModule = (function () {
  class Person {
    constructor(name, surname) {
      if (typeof name !== "string") {
        throw new Error("name must be a string");
      }

      if (typeof surname !== "string") {
        throw new Error("surname must be a string");
      }
      this.name = name;
      this.surname = surname;
    }

    getData() {
      return `${this.name} ${this.surname}`;
    }
  }

  class Seat {
    constructor(number = Math.floor(Math.random() * 91) + 10, category = "e") {
      this.number = number;
      this.category = category;
    }

    getData() {
      return `${this.number}, ${this.category.toUpperCase()}`;
    }
  }

  class Passenger {
    constructor(person, seat) {
      if (!(person instanceof Person)) {
        throw new Error("Invalid person: must be an instance of Person");
      }

      if (!(seat instanceof Seat)) {
        throw new Error("Invalid seat: must be an instance of Seat");
      }

      this.person = person;
      this.seat = seat;
    }

    getData() {
      return `${this.seat.getData()}, ${this.person.getData()}`;
    }
  }

  class Flight {
    constructor(relation, date) {
      if (typeof relation !== "string") {
        throw new Error("relation must be a string");
      }

      if (!(date instanceof Date)) {
        throw new Error("date must be a Date");
      }
      this.relation = relation;
      this.date = date;
      this.passengers = [];
    }

    addPassenger(passenger) {
      if (!(passenger instanceof Passenger)) {
        throw new Error("Invalid passenger: must be an instance of Passenger");
      }

      this.passengers.push(passenger);
    }

    getData() {
      let result = `${this.date}, ${this.relation}\n`;
      for (let i = 0; i < this.passengers.length; i++) {
        result += `\t${this.passengers[i].getData()}\n`;
      }
      return result;
    }
  }

  class Airport {
    constructor() {
      this.name = "Nikola Tesla";
      this.flights = [];
    }

    addFlight(flight) {
      if (!(flight instanceof Flight)) {
        throw new Error("Invalid flight: must be an instance of Flight");
      }

      this.flights.push(flight);
    }

    getData() {
      let numberOfPassengers = 0;
      for (let i = 0; i < this.flights.length; i++) {
        numberOfPassengers += this.flights[i].passengers.length;
      }

      let result = `Airport: ${this.name}, total passengers: ${numberOfPassengers}\n`;

      for (let i = 0; i < this.flights.length; i++) {
        result += `\t${this.flights[i].getData()}`;
      }

      return result;
    }
  }

  const airport = new Airport();

  function createFlight(relations, date) {
    const flight = new Flight(relations, date);
    airport.addFlight(flight);
    return airport;
  }

  const validateFlightData = (relation, date) => {
    const errors = [];
    if (!relation || typeof relation !== "string") {
      errors.push("Relation must be a non-empty string.");
    }
    if (!date || isNaN(Date.parse(date))) {
      errors.push("Date must be a valid date.");
    }
    // check if date is not in past
    const flightDate = new Date(date);
    const today = new Date();
    if (flightDate <= today) {
      errors.push("Flight date cannot be in the past.");
    }
    const relationSegments = relation.split("-");
    if (
      relationSegments.length !== 2 ||
      relationSegments.some((seg) => !seg.trim())
    ) {
      errors.push("Relation must be in the format 'City1-City2'.");
    }
    return errors;
  };

  const validatePassengerData = (name, surname, flightIndex) => {
    const errors = [];
    if (!name || typeof name !== "string") {
      errors.push("Name must be a non-empty string.");
    }
    if (!surname || typeof surname !== "string") {
      errors.push("Surname must be a non-empty string.");
    }
    if (
      isNaN(flightIndex) ||
      flightIndex < 0 ||
      flightIndex >= airport.flights.length
    ) {
      errors.push("Flight index must be a valid index of an existing flight.");
    }
    return errors;
  };

  const createPassenger = (
    name,
    surname,
    seatNumber,
    category,
    flightIndex
  ) => {
    const flight = airport.flights[flightIndex];
    if (!flight) {
      throw new Error("Flight not found.");
    }

    const person = new Person(name, surname);
    const seat = new Seat(seatNumber, category);
    const passenger = new Passenger(person, seat);

    flight.addPassenger(passenger);
    return airport;
  };

  return {
    validateFlightData,
    createFlight,
    validatePassengerData,
    createPassenger,
  };
})();