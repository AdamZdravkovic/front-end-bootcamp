const uiModule = (function () {
  const relationInput = document.querySelector("#flightRelation");
  const dateInput = document.querySelector("#flightDate");
  const passengerNameInput = document.querySelector("#passengerName");
  const passengerSurnameInput = document.querySelector("#passengerSurname");
  const passengerSeatInput = document.querySelector("#seatNumber");
  
  const collectFlightData = function () {
    const relationValue = relationInput.value;
    const dateValue = dateInput.value;
    return {
      relation: relationValue,
      date: dateValue,
    };
  };

  const displayFlightValidationErrors = function (errors) {
    const errorMessageDiv = document.querySelector(".flight-errors");
    //remove previous errors
    errorMessageDiv.innerHTML = "";
    errors.forEach((element) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = element;
      errorMessageDiv.appendChild(errorParagraph);
    });
  };
  
  const updateFlightSelectOptions = function (flights) {
    const flightSelect = document.querySelector("#flightSelect");
    flightSelect.innerHTML = ""; // Clear previous options
    flights.forEach((flight, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${flight.getData()}`;
      flightSelect.appendChild(option);
    });
  };
  const clearFlightForm = function () {
    relationInput.value = "";
    dateInput.value = "";
  };
  const displayAirportData = function (airport) {
    const flightCounterSpan = document.querySelector(".flights-counter");
    const flightsContainer = document.querySelector(".flights");
    flightCounterSpan.textContent = airport.flights.length;
    flightsContainer.innerHTML = ""; // Clear previous flights
    airport.flights.forEach((flight) => {
      flightsContainer.innerHTML += `
      <div class="flight">
        <h2>${flight.getData()}</h2>
        ${flight.passengers.reduce((acc, passenger) => {
          return (
            acc +
            `<div class="passenger">
        <strong>Seat:</strong>${passenger.seat.getData()}<br />
        <strong>Name:</strong> ${passenger.person.getData()}<br />
      </div>`
          );
        }, "")}
      </div>`;
    });
  };
  const collectPassengerData = function () {
    const passengerCategorySelectInput =
      document.querySelector("#seatCategory");
    const flightSelectInput = document.querySelector("#flightSelect");
    const passengerName = passengerNameInput.value;
    const passengerSurname = passengerSurnameInput.value;
    const passengerSeat = passengerSeatInput.value;
    const passengerCategory = passengerCategorySelectInput.value;
    const flightIndex = flightSelectInput.value;
    return {
      name: passengerName,
      surname: passengerSurname,
      seatNumber: passengerSeat,
      category: passengerCategory,
      flightIndex: Number(flightIndex),
    };
  };
  const displayPassengerValidationErrors = function (errors) {
    const errorMessageDiv = document.querySelector(".passenger-errors");
    //remove previous errors
    errorMessageDiv.innerHTML = "";
    errors.forEach((element) => {
      const errorParagraph = document.createElement("p");
      errorParagraph.textContent = element;
      errorMessageDiv.appendChild(errorParagraph);
    });
  };
  const clearPassengerForm = function () {
    passengerNameInput.value = "";
    passengerSurnameInput.value = "";
    passengerSeatInput.value = "";
  };
  return {
    collectFlightData,
    displayFlightValidationErrors,
    displayAirportData,
    updateFlightSelectOptions,
    clearFlightForm,
    collectPassengerData,
    displayPassengerValidationErrors,
    clearPassengerForm,
  };
})();









