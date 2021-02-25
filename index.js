const filereader = require("./filereader");
const interSections = require("./intersections")

const {streets, cars, data} = filereader.readData('a')

interSections.get(streets)

