const filereader = require("./filereader");

const {streets, cars} = filereader.readData('a')

console.log(cars)