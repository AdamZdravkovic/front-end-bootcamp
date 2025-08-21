import { getBettingHouseData, createCountry, createPerson, createBettingPlace } from "./model.js";
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
  getAddressFormData,
  validateAddressFormData,
  updateBettingPlaceSelectOptions,
} from "./view.js";

const createCountryButton = document.querySelector("#btn-create-country");
const createPersonButton  = document.querySelector("#btn-create-person");
const createAddressButton = document.querySelector("#btn-create-address");
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

createAddressButton.addEventListener("click", function () {
  const data = getAddressFormData();
  const errors = validateAddressFormData(data);
  if (errors.length > 0) {
    renderValidationErrors(errors);
    return;
  }
  // Clear previous error messages
  clearErrMessages();
  // Create a new address object

  try {
    const postal = parseInt(data.postal, 10); // model needs a number

    const bettingPlace = createBettingPlace(
      data.country,
      data.city,
      postal,             // use the parsed number
      data.street,
      data.number
    );
  // Update the betting place data in the UI
  updateBettingPlaceSelectOptions(bettingPlace.address);
  } catch (err) {
    // surface model validation errors to the user
    renderValidationErrors([err.message]);
  }
});

const createPlayerButton = document.querySelector("#btn-create-player");

createPlayerButton.addEventListener("click", () => {
  const person  = document.querySelector("#player-person").value;
  const country = document.querySelector("#player-country").value;
  const amount  = document.querySelector("#player-amount").value;

  // put the new player into the "Add Player to Place" <select>
  const bpPlayer = document.querySelector("#bp-player");
  const opt = document.createElement("option");
  opt.textContent = `${person} — ${country} — ${amount} eur`;
  opt.value = opt.textContent;
  bpPlayer.appendChild(opt);
  bpPlayer.value = opt.value; // preselect

  // scroll to the "Add Player to Place" form and focus it
  const addForm = document.querySelector("#form-bp-add-player");
});

const createBpButton = document.querySelector("#btn-create-bp");

createBpButton.addEventListener("click", () => {
  const src = document.querySelector("#bp-address");
  const dst = document.querySelector("#bp-place");
  const value = src.value;
  if (!value) return;

  // simple duplicate guard
  for (let i = 0; i < dst.options.length; i++) {
    if (dst.options[i].value === value) {
      dst.value = value; // just select it if it already exists
      return;
    }
  }

  const opt = document.createElement("option");
  opt.value = value;
  opt.textContent = value;
  dst.appendChild(opt);
  dst.value = value; // select the newly added one
});

const addPlayerToPlaceBtn = document.querySelector("#btn-bp-add-player");

addPlayerToPlaceBtn.addEventListener("click", () => {
  const player = document.querySelector("#bp-player").value;
  const place  = document.querySelector("#bp-place").value;
  if (!player || !place) return;

  const wrapper = document.querySelector("#bets-wrapper");
  const line = `${player} - ${place}`;

  // simple duplicate guard
  for (let i = 0; i < wrapper.children.length; i++) {
    if (wrapper.children[i].textContent === line) return;
  }

  const p = document.createElement("p");
  p.textContent = line;
  wrapper.appendChild(p);
});















init();
