const fs = require("fs");
const path = require("path");

module.exports = {
    readData: (file) => {
        const filename = path.join(__dirname, "input", `${file}.txt`);
        const [data, ...rest] = fs.readFileSync(filename).toString().replace(/\r/g, '').split(/\n/);

        const [duration, numOfintersec, numOfStreets, numOfCars, finishPoints] = data.split(" ");

        const streets = rest.slice(0, numOfStreets).map(str => {
            let x = str.split(" ");

            return {
                startIntersec: x[0],
                endIntersec: x[1],
                name: x[2],
                length: x[3]
            }
        });
        const cars = rest.reverse().slice(0, numOfCars).map(c => {
            let x = c.split(" ");

            return {
                numOfStreets: x[0],
                streets: [...x.slice(1, x.length)]
            }
        });

        return {
            data,
            cars,
            streets
        }
    }

}