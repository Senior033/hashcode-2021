const filereader = require("./filereader");
const interSections = require("./intersections")

const {data, cars, streets} = filereader.readData('a')

interSections.get(streets,cars)