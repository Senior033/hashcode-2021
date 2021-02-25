const fs = require("fs");
const path = require("path");

module.exports = {
    write: (data) => {
        let result = ""
       const countOfInters = Object.keys(data).length;
        result += countOfInters + "\n";
       Object.keys(data).forEach(inters => {
        const streets = data[inters];
        result += inters + "\n";
        result += streets.length + "\n";
        streets.forEach(str => {
            result += str.name + " " + str.occ + "\n";
        })
       });
       console.log(result);

       fs.writeFileSync("output.txt", result);
    }
}
