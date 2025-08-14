import { getBettingHouseData, createCountry, createPerson } from "./model.js";
import {
  updateBettingHouseInfo,
  getCountryFormData,
  validateCountryFormData,
  renderValidationErrors,
  updatePlayerCountrySelectOptions,
  getPersonFormData,
  validatePersonFormData,
  clearErrMessages,
  updatePlayerPersonSelectOptions,
} from "./view.js";

const createCountryButton = document.querySelector("#btn-create-country");
const createPersonButton = document.querySelector("#btn-create-person");

const init = function () {
  const bettingHouseData = getBettingHouseData();
  updateBettingHouseInfo(bettingHouseData);
};

createCountryButton.addEventListener("click", function () {
  // Collect data from the form
  const data = getCountryFormData();
  const errors = validateCountryFormData(data);

  // Validate data
  if (errors.length > 0) {
    renderValidationErrors(errors);
    return;
  }
  // Clear previous error messages
  clearErrMessages();

  // Create a new country object
  const country = createCountry(data.name, data.odds, data.continent);

  //update ui with the new country data
  updatePlayerCountrySelectOptions(country);
});

createPersonButton.addEventListener("click", function () {
  // Collect data from the form
  const personData = getPersonFormData();
  // Validate data
  const errors = validatePersonFormData(personData);
  if (errors.length > 0) {
    renderValidationErrors(errors);
    return;
  }
  // Clear previous error messages
  clearErrMessages();

  // Create a new player object
  const person = createPerson(
    personData.name,
    personData.surname,
    personData.birthday
  );
  // Update the betting place data in the UI
  updatePlayerPersonSelectOptions(person);
});

init();
