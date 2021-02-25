const filereader = require("./filereader");
const {data, cars, streets} = filereader.readData('a');

const { write } = require("./output");
const interSections = require("./intersections").get(streets, cars)
const ratio = require("./ratio").get(streets, cars)
let result = {};
Object.entries(interSections).forEach(([key, value])=>{
    const streetsForInters = value.map(x => x.name);
    result[key] = streetsForInters.map(street => ({
        name: street,
        occ: ratio.get(street)
    }))
})
write(result);

