(function () {
"use strict";


function Product(name, price, expirationDate) {
    this.productId = Math.floor(10000 + Math.random() * 90000);
    this.name = name;
    this.price = Math.round(parseFloat(price) * 100) / 100;
    this.expirationDate = new Date(expirationDate);

    this.getInfo = function() {
        const productCode = (this.name[0] + this.name.slice(-1)).toUpperCase() + this.productId;

        return `${productCode}, ${this.name}, ${this.price}`;
    };
};

function ShoppingBag() {
    this.listOfProducts = [];

    this.addProduct = function(product) {
        const today = new Date();

        if (product.expirationDate > today) {
            this.listOfProducts.push(product);
        };
    };

    this.getAveragePrice = function() {
        let priceTotal = 0;

        this.listOfProducts.forEach(function(product) {
            priceTotal += product.price;
        });

        const numberOfProducts = this.listOfProducts.length;

        if (numberOfProducts === 0) return "0.000";

        const priceAverage = priceTotal / numberOfProducts;

        return priceAverage.toFixed(3);

    };

    this.getMostExpensive = function() {
        if (this.listOfProducts.length === 0) return null;

        let mostExpensive = this.listOfProducts[0];

        for (let i = 1; i < this.listOfProducts.length; i++) {
            if (mostExpensive.price < this.listOfProducts[i].price) {
                mostExpensive = this.listOfProducts[i];
            };
        };
        return mostExpensive.getInfo();
    };

    this.calculateTotalPrice = function() {
        let totalPrice = 0;

        for (let i = 0; i < this.listOfProducts.length; i++) {
            totalPrice += this.listOfProducts[i].price;
        };

        return totalPrice;
    };
};

function PaymentCard(accountBalance, isActive, validUntil) {
    this.accountBalance = Math.round(parseFloat(accountBalance).toFixed(2));
    this.isActive = Boolean(isActive);
    this.validUntil = new Date(validUntil);
};

function checkoutAndBuy(shoppingBag, paymentCard) {
    if (shoppingBag.calculateTotalPrice() <= paymentCard.accountBalance) {
        return `Purchase is successful. Remaining balance is: ${paymentCard.accountBalance - shoppingBag.calculateTotalPrice()}`;
    } else {
        return `Amount missing: ${shoppingBag.calculateTotalPrice() - paymentCard.accountBalance}`;
    };
};

const product1 = new Product("banana", 1.99, "2025-12-23");
const product2 = new Product("apple", 2.56, "2025-07-12");
const product3 = new Product("carrot", 1.29, "2025-11-01");


const creditCard = new PaymentCard(9.43, true, "2025-09-21");

const shoppingBag = new ShoppingBag();

shoppingBag.addProduct(product1);
shoppingBag.addProduct(product2);
shoppingBag.addProduct(product3);

console.log("Average price:", shoppingBag.getAveragePrice());
console.log("Most Expensive Product:", shoppingBag.getMostExpensive());
console.log("Total Price:", shoppingBag.calculateTotalPrice())

console.log(checkoutAndBuy(shoppingBag, creditCard));
})();