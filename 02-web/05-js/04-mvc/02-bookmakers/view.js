export const updateBettingHouseInfo = function (info) {
  const detailsP = document.querySelector("#betting-house-report");
  detailsP.textContent = info;
};

export const getCountryFormData = function () {
  const countryInput = document.querySelector("#country-name");
  const oddsInput = document.querySelector("#country-odds");
  const continentSelect = document.querySelector("#country-continent");

  return {
    name: countryInput.value,
    odds: parseFloat(oddsInput.value),
    continent: continentSelect.value,
  };
};

export const validateCountryFormData = function (data) {
  const errors = [];
  if (!data.name || typeof data.name !== "string") {
    errors.push("Country name is required and must be a string.");
  }
  if (isNaN(data.odds) || data.odds <= 0) {
    errors.push("Odds must be a positive number.");
  }
  if (!data.continent) {
    errors.push("Continent is required.");
  }
  return errors;
};

export const renderValidationErrors = function (errors) {
  const errorsDiv = document.querySelector("#errors");
  errorsDiv.innerHTML = ""; // Clear previous errors
  errors.forEach((error) => {
    const errorP = document.createElement("p");
    errorP.textContent = error;
    errorsDiv.appendChild(errorP);
  });
};

export const updatePlayerCountrySelectOptions = function (country) {
  const countrySelect = document.querySelector("#player-country");
  const option = document.createElement("option");
  option.value = country.name;
  option.textContent = `${country.name} (${country.odds})`;
  countrySelect.appendChild(option);
};

export const getPersonFormData = function () {
  const nameInput = document.querySelector("#person-name");
  const surnameInput = document.querySelector("#person-surname");
  const birthdayInput = document.querySelector("#person-dob");

  return {
    name: nameInput.value,
    surname: surnameInput.value,
    birthday: new Date(birthdayInput.value),
  };
};

export const validatePersonFormData = function (data) {
  const errors = [];
  if (!data.name || typeof data.name !== "string") {
    errors.push("Person's name is required and must be a string.");
  }
  if (!data.surname || typeof data.surname !== "string") {
    errors.push("Person's surname is required and must be a string.");
  }
  if (!(data.birthday instanceof Date) || isNaN(data.birthday)) {
    errors.push("Birthday must be a valid date.");
  }
  return errors;
};

export const clearErrMessages = function () {
  const errorsDiv = document.querySelector("#errors");
  errorsDiv.innerHTML = ""; // Clear previous errors
};

export const updatePlayerPersonSelectOptions = function (person) {
  const personSelect = document.querySelector("#player-person");
  const option = document.createElement("option");
  option.value = person.name + " " + person.surname;
  option.textContent = `${person.name} ${person.surname}`;
  personSelect.appendChild(option);
};

export const getAddressFormData = function () {
  const countryCode = document.querySelector("#address-country");
  const cityInput = document.querySelector("#address-city");
  const postalInput = document.querySelector("#address-postal");
  const addressInput = document.querySelector("#address-street");
  const numberInput = document.querySelector("#address-number");
  return {
    country: countryCode.value,
    city: cityInput.value,
    postal: postalInput.value,
    street: addressInput.value,
    number: parseInt(numberInput.value, 10),
  };
};

export const validateAddressFormData = function (data) {
  const errors = [];
  if (!data.country || typeof data.country !== "string") {
    errors.push("Country is required and must be a string.");
  }
  if (!data.city || typeof data.city !== "string") {
    errors.push("City is required and must be a string.");
  }
  if (!data.postal || typeof data.postal !== "string") {
    errors.push("Postal code is required and must be a string.");
  }
  if (!data.street || typeof data.street !== "string") {
    errors.push("Street is required and must be a string.");
  }
  if (isNaN(data.number) || data.number <= 0) {
    errors.push("House number must be a positive integer.");
  }
  return errors;
}

export const updateBettingPlaceSelectOptions = function (address) {
  const addressSelect = document.querySelector("#bp-address");
  const option = document.createElement("option");
  option.value = `${address.country}, ${address.city}, ${address.street} ${address.number}`;
  option.textContent = `${address.country}, ${address.city}, ${address.street} ${address.number}`;
  addressSelect.appendChild(option);
};