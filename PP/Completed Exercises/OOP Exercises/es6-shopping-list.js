(() => {
"use strict";

class Product {
    constructor(name, price, expirationDate) {
        this.productId = Math.floor(10000 + Math.random() * 90000);
        this.name = name;
        this.price = Math.round(parseFloat(price) * 100) / 100;
        this.expirationDate = new Date(expirationDate);
    }

    getInfo() {
        const productCode = (this.name[0] + this.name.slice(-1)).toUpperCase() + this.productId;
        return `${productCode}, ${this.name}, ${this.price}`;
    }
}

class ShoppingBag {
    constructor() {
        this.listOfProducts = [];
    }

    addProduct(product) {
        const today = new Date();
        if (product.expirationDate > today) {
            this.listOfProducts.push(product);
        }
    }

    getAveragePrice() {
        const priceTotal = this.listOfProducts.reduce((sum, product) => sum + product.price, 0);
        const numberOfProducts = this.listOfProducts.length;
        if (numberOfProducts === 0) return "0.000";
        return (priceTotal / numberOfProducts).toFixed(3);
    }

    getMostExpensive() {
        if (this.listOfProducts.length === 0) return null;
        const mostExpensive = this.listOfProducts.reduce((prev, curr) => 
            curr.price > prev.price ? curr : prev
        );
        return mostExpensive.getInfo();
    }

    calculateTotalPrice() {
        return this.listOfProducts.reduce((total, product) => total + product.price, 0);
    }
}

class PaymentCard {
    constructor(accountBalance, isActive, validUntil) {
        this.accountBalance = Math.round(parseFloat(accountBalance).toFixed(2));
        this.isActive = Boolean(isActive);
        this.validUntil = new Date(validUntil);
    }
}

const checkoutAndBuy = (shoppingBag, paymentCard) => {
    const total = shoppingBag.calculateTotalPrice();
    if (total <= paymentCard.accountBalance) {
        return `Purchase is successful. Remaining balance is: ${paymentCard.accountBalance - total}`;
    } else {
        return `Amount missing: ${total - paymentCard.accountBalance}`;
    }
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
console.log("Total Price:", shoppingBag.calculateTotalPrice());
console.log(checkoutAndBuy(shoppingBag, creditCard));

})();