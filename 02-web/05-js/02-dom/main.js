// Adds the class "highlight" to the second list (vegetable list)
// which applies a background color or other styles from CSS
function highlightSecondList() {
    // Select the <ul> with id "vegetable-list"
    const secondList = document.getElementById("vegetable-list");
    // Add the "highlight" class to it
    secondList.classList.add("highlight");
}

// Immediately call the function to highlight the vegetable list on page load
highlightSecondList();


// Selects all <li> elements on the page and adds the "new-color" class to each,
// which applies a background color or other styles from CSS
function selectAllLi() {
    // Get all <li> elements in the document (returns an HTMLCollection)
    const allLi = document.getElementsByTagName("li");
    // Loop through all <li> elements
    for (let i = 0; i < allLi.length; i++) {
        // Add the "new-color" class to each <li>
        allLi[i].classList.add("new-color");
    }
}

// Call the function to add the class to all <li> elements
selectAllLi();


// Selects the <ul> with class "vitamins" and adds "vitamin-style" class
// to each <li> inside it (applies special styles like uppercase and background)
function selectLastLi() {
    // Get the first <ul> element with class "vitamins"
    const lastUl = document.getElementsByClassName("vitamins")[0];
    // Get all <li> elements inside that <ul>
    const liItems = lastUl.getElementsByTagName("li");

    // Loop through each <li> inside vitamins list
    for (let i = 0; i < liItems.length; i++) {
        // Add "vitamin-style" class to apply custom styles
        liItems[i].classList.add("vitamin-style");
    }
}

// Call the function to style vitamin list items
selectLastLi();


// This function handles traversal and manipulation of the "active" class in the lists
function traverse() {
    // Select the <li> that currently has the class "active"
    const activeLi = document.querySelector("li.active");

    // If an active <li> exists, remove the "active" class from it
    if (activeLi) {
        activeLi.classList.remove("active");
    }

    // Select the first <div> element on the page
    const firstDiv = document.getElementsByTagName("div")[0];
    // Inside that div, select the first <ul>
    const firstUl = firstDiv.querySelector("ul");
    // Select the first <li> inside that first <ul>
    const firstLi = firstUl.querySelector("li");

    // Add the "active" class to the first <li> in the first list inside the first div
    firstLi.classList.add("active");
}

// Call the traverse function to update "active" class on page load
traverse();


// Alerts the text content of a specific <li> element by its index
// Defaults to the first <li> if no index is provided
function alertLiText(index = 0) {
    // Select all <li> elements as a NodeList
    const allLi = document.querySelectorAll("li");

    // Check if the index is valid (within bounds)
    if (index >= 0 && index < allLi.length) {
        // Show an alert with the text inside the specified <li>
        alert(allLi[index].textContent);
    } else {
        // Alert invalid index if out of range
        alert("Invalid index");
    }
}

// Call alertLiText with index 2 (alerts text of the third <li>)
alertLiText(2);


// Replaces the text content of the last <li> element on the page with the given text argument
function replaceLastLiText(text) {
    // Select all <li> elements
    const allLi = document.querySelectorAll("li");

    // Check if there is at least one <li> element
    if (allLi.length > 0) {
        // Get the last <li> element in the NodeList
        const lastLi = allLi[allLi.length - 1];
        // Replace its text content with the provided text
        lastLi.textContent = text;
    } else {
        // If no <li> found, log a warning to the console
        console.warn("No <li> elements found on the page");
    }
}

// Replace the last <li> text with "Catalog"
replaceLastLiText("Catalog");


// Creates a <select> dropdown using DOM methods and appends it to a given container node
// optionsArray: array of strings for option texts
// containerNode: DOM node to append the <select> element to
function buildDropdownDOM(optionsArray, containerNode) {
    // Create a new <select> element
    const select = document.createElement("select");

    // Loop through each string in the optionsArray
    optionsArray.forEach(optionText => {
        // Create a new <option> element
        const option = document.createElement("option");
        // Set the visible text inside the option
        option.textContent = optionText;
        // Set the value attribute to a lowercase, hyphenated version of the option text
        option.value = optionText.toLowerCase().replace(/\s+/g, '-');
        // Append the option to the select dropdown
        select.appendChild(option);
    });

    // Append the completed select element to the specified container node in the DOM
    containerNode.appendChild(select);
}


// Creates a <select> dropdown by building the options as an HTML string and inserts it using innerHTML
// optionsArray: array of strings for option texts
// containerNode: DOM node to append the <select> element to
function buildDropdownInnerHTML(optionsArray, containerNode) {
    // Initialize an empty string to hold all options HTML
    let optionsHTML = "";

    // Loop through each string in the optionsArray
    optionsArray.forEach(optionText => {
        // Create the HTML string for each option
        const value = optionText.toLowerCase().replace(/\s+/g, '-');
        optionsHTML += `<option value="${value}">${optionText}</option>`;
    });

    // Append the whole select element with options to the container's existing HTML
    containerNode.innerHTML += `<select>${optionsHTML}</select>`;
}


// Example arrays to populate dropdowns
const languages = ["JavaScript", "Python", "Ruby"];
const countries = ["Chile", "Germany", "Japan"];

// Select all <div> elements on the page (NodeList)
const divs = document.querySelectorAll("div");

// Build a dropdown for languages inside the first div
buildDropdownDOM(languages, divs[0]);

// Build a dropdown for countries inside the last div
buildDropdownInnerHTML(countries, divs[divs.length - 1]);


// Validates a form by checking required inputs and adding red borders if empty
// formId: id of the form to validate
function validateForm(formId) {
    // Get the form element by id
    const form = document.getElementById(formId);
    // Select all input elements inside the form
    const inputs = form.querySelectorAll("input");
    let isValid = true;

    // Loop through each input element
    inputs.forEach(input => {
        // Reset the input border style before validation
        input.style.border = "";

        // If the input is required and empty (after trimming whitespace)
        if (input.hasAttribute("required") && !input.value.trim()) {
            // Add a red border to indicate invalid input
            input.style.border = "2px solid red";
            // Mark form as invalid
            isValid = false;
        }
    });

    // Return overall validity status (false prevents form submission)
    return isValid;
}