// controller.js
"use strict";

const mainModule = (function (ui, data) {
  const createFlightButton = document.querySelector("#create-flight");
  const createPassengerButton = document.querySelector("#create-passenger");

  createFlightButton.addEventListener("click", function () {
    // collect data
    const formData = ui.collectFlightData();

    // validate data
    const errors = data.validateFlightData(formData.relation, formData.date);
    ui.displayFlightValidationErrors(errors);
    if (errors.length > 0) {
      return;
    }

    // create Flight and add it to Airport
    const airport = data.createFlight(formData.relation, new Date(formData.date));

    // update UI
    ui.updateFlightSelectOptions(airport.flights);
    ui.displayAirportData(airport);
    ui.clearFlightForm();
  });

  createPassengerButton.addEventListener("click", function () {
    // collect data
    const formData = ui.collectPassengerData();

    // validate data (name, surname, flightIndex)
    const errors = data.validatePassengerData(
      formData.name,
      formData.surname,
      formData.flightIndex
    );
    ui.displayPassengerValidationErrors(errors);
    if (errors.length > 0) {
      return;
    }

    // create Passenger and add to selected Flight
    const airport = data.createPassenger(
      formData.name,
      formData.surname,
      formData.seatNumber,
      formData.category,
      formData.flightIndex
    );

    // update UI
    ui.displayAirportData(airport);
    ui.clearPassengerForm();
  });
})(uiModule, dataModule);
