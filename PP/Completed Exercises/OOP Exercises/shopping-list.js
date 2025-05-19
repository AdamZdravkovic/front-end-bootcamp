(function () {
"use strict";

// Constructor function to create a Product object
function Product(name, price, expirationDate) {
    // Generate a random product ID between 10000 and 99999
    this.productId = Math.floor(10000 + Math.random() * 90000);
    this.name = name;
    // Round the price to 2 decimal places
    this.price = Math.round(parseFloat(price) * 100) / 100;
    // Convert expirationDate string to a Date object
    this.expirationDate = new Date(expirationDate);

    // Method to return product info string: product code, name and price
    this.getInfo = function() {
        // Create product code from first and last letter of name + productId, all uppercase
        const productCode = (this.name[0] + this.name.slice(-1)).toUpperCase() + this.productId;

        // Return formatted string with product code, name, and price
        return `${productCode}, ${this.name}, ${this.price}`;
    };
}

// Constructor function to create a ShoppingBag object
function ShoppingBag() {
    // Initialize an empty array to store products
    this.listOfProducts = [];

    // Method to add a product to the shopping bag if it's not expired
    this.addProduct = function(product) {
        const today = new Date();

        // Only add product if expiration date is in the future
        if (product.expirationDate > today) {
            this.listOfProducts.push(product);
        };
    };

    // Method to calculate average price of all products in the bag
    this.getAveragePrice = function() {
        let priceTotal = 0;

        // Sum the prices of all products
        this.listOfProducts.forEach(function(product) {
            priceTotal += product.price;
        });

        const numberOfProducts = this.listOfProducts.length;

        // If no products, return 0.000 as average
        if (numberOfProducts === 0) return "0.000";

        // Calculate average and format to 3 decimal places
        const priceAverage = priceTotal / numberOfProducts;

        return priceAverage.toFixed(3);
    };

    // Method to find and return info about the most expensive product in the bag
    this.getMostExpensive = function() {
        if (this.listOfProducts.length === 0) return null;

        // Start assuming the first product is most expensive
        let mostExpensive = this.listOfProducts[0];

        // Loop through products and update if find a more expensive one
        for (let i = 1; i < this.listOfProducts.length; i++) {
            if (mostExpensive.price < this.listOfProducts[i].price) {
                mostExpensive = this.listOfProducts[i];
            };
        };

        // Return the product info string of the most expensive product
        return mostExpensive.getInfo();
    };

    // Method to calculate total price of all products in the bag
    this.calculateTotalPrice = function() {
        let totalPrice = 0;

        // Sum the prices of all products
        for (let i = 0; i < this.listOfProducts.length; i++) {
            totalPrice += this.listOfProducts[i].price;
        };

        return totalPrice;
    };
}

// Constructor function to create a PaymentCard object
function PaymentCard(accountBalance, isActive, validUntil) {
    // Round balance to 2 decimal places and convert to number
    this.accountBalance = Math.round(parseFloat(accountBalance).toFixed(2));
    // Convert isActive value to boolean
    this.isActive = Boolean(isActive);
    // Convert validUntil string to a Date object
    this.validUntil = new Date(validUntil);
}

// Function to simulate checkout process and payment
function checkoutAndBuy(shoppingBag, paymentCard) {
    // Check if the card balance covers the total price of the shopping bag
    if (shoppingBag.calculateTotalPrice() <= paymentCard.accountBalance) {
        // Successful purchase: return message with remaining balance
        return `Purchase is successful. Remaining balance is: ${paymentCard.accountBalance - shoppingBag.calculateTotalPrice()}`;
    } else {
        // Insufficient funds: return message with amount missing
        return `Amount missing: ${shoppingBag.calculateTotalPrice() - paymentCard.accountBalance}`;
    };
}

// Example products with name, price, and expiration date
const product1 = new Product("banana", 1.99, "2025-12-23");
const product2 = new Product("apple", 2.56, "2025-07-12");
const product3 = new Product("carrot", 1.29, "2025-11-01");

// Example payment card with balance, active status, and expiry date
const creditCard = new PaymentCard(9.43, true, "2025-09-21");

// Create a new shopping bag instance
const shoppingBag = new ShoppingBag();

// Add products to the shopping bag (only non-expired will be added)
shoppingBag.addProduct(product1);
shoppingBag.addProduct(product2);
shoppingBag.addProduct(product3);

// Output average price of products in the bag
console.log("Average price:", shoppingBag.getAveragePrice());
// Output info about the most expensive product in the bag
console.log("Most Expensive Product:", shoppingBag.getMostExpensive());
// Output total price of all products in the bag
console.log("Total Price:", shoppingBag.calculateTotalPrice());

// Perform checkout and output result of purchase attempt
console.log(checkoutAndBuy(shoppingBag, creditCard));

})();