// Logs a simple greeting message to the console

function logNewMessage() {
  console.log("Good morning!");
}

// Logs information about the browser platform, version, and vendor

function logBrowserInfo() {
  console.log("Platform:", navigator.platform);
  console.log("Browser version:", navigator.userAgent);
  console.log("Browser vendor:", navigator.vendor);
}

// Logs whether the browser is online or offline

function isOnline() {
  console.log(navigator.onLine ? "online" : "offline");
}

// Logs browser viewport width, height, and maximum available screen height

function logScreenInfo() {
  console.log("Browser viewport width:", window.innerWidth);
  console.log("Browser viewport height:", window.innerHeight);
  console.log("Maximum available screen height:", window.screen.availHeight);
}

// Logs current URL details: full URL, domain name, protocol, and URL parameters

function logLocationInfo() {
  console.log("Full URL:", window.location.href);
  console.log("Domain name:", window.location.hostname);
  console.log("Protocol:", window.location.protocol);

  // Logs each URL parameter key and its value, if any

  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

// Reloads the current page

function reloadPage() {
  window.location.reload();
}

// Redirects browser to the specified URL

function redirectTo(url) {
  window.location.href = url;
}

// Stores data in localStorage under the given key

function storeData(key, value) {
  localStorage.setItem(key, value);
}

// Reads data from localStorage for the given key and logs it, or logs "There is no data" if none found

function readData(key) {
  const value = localStorage.getItem(key);
  if (value === null) {
    console.log("There is no data");
  } else {
    console.log(value);
  }
}

// Removes stored data from localStorage by key

function removeData(key) {
  localStorage.removeItem(key);
}

// Stores data in sessionStorage under the given key

function storeSessionData(key, value) {
  sessionStorage.setItem(key, value);
}

// Reads data from sessionStorage for the given key and logs it, or logs "There is no data" if none found

function readSessionData(key) {
  const value = sessionStorage.getItem(key);
  if (value === null) {
    console.log("There is no data");
  } else {
    console.log(value);
  }
}

// Removes stored data from sessionStorage by key

function removeSessionData(key) {
  sessionStorage.removeItem(key);
}

// Navigates one page back in browser history

function goBack() {
  window.history.back();
}

// Navigates one page forward in browser history

function goForward() {
  window.history.forward();
}

// Navigates two pages back in browser history

function goTwoPagesBack() {
  window.history.go(-2);
}

// Shows greeting with alert, asks question with prompt, and confirms answer with confirm
// If user confirms, shows a success message; if canceled, does nothing

function showGreeting() {
  alert("Bonjour!");
  const answer = prompt("How are you feeling today?");
  if (answer !== null) {
    const isConfirmed = confirm(`You answered: "${answer}". Is that correct?`);
    if (isConfirmed) {
      alert("Success! Your answer was confirmed.");
    }
  }
}

// Generates and returns an array of 10 random integers between 1 and 50

function randomNumbers() {
  const result = [];
  for (let i = 0; i < 10; i++) {
    const randomNum = Math.floor(Math.random() * 50) + 1;
    result.push(randomNum);
  }
  return result;
}

// Rounds all numbers in the given array to two decimal places and returns a new array

function roundToTwoDecimals(arr) {
  return arr.map(num => Math.round(num * 100) / 100);
}

// Rounds all numbers in the given array down to the nearest integer and returns a new array

function roundAll(arr) {
  return arr.map(num => Math.floor(num));
}

// Returns the largest number from the given array

function getTheMax(arr) {
  return Math.max(...arr);
}

// Logs the current date and time as a Date object

console.log(new Date());

// Logs the current time as a localized time string

console.log(new Date().toLocaleTimeString());

// Logs the current date as a localized date string

console.log(new Date().toLocaleDateString());