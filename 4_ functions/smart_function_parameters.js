function printWatch({ brand, price }) {
    return "The price of the " + brand + "\'s watch is " + price;
}

const watch = {
    brand: "Titan",
    price: 10000,
    currency: "INR",
}
console.log(printWatch(watch));