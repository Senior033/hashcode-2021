const filereader = require("./filereader");
const {data, cars, streets} = filereader.readData('b');

const { write } = require("./output");
const interSections = require("./intersections").get(streets, cars)
const ratio = require("./ratio").get(streets, cars)
let result = {};
Object.entries(interSections).forEach(([key, value])=>{
    const streetsForInters = value.map(x => x.name);
    result[key] = streetsForInters.map(street => ({
        name: street,
        occ: ratio.get(street)
    })).filter(street=>street.occ!==0)
})

 const keysToDelete = Object.keys(result).filter(x => result[x].length === 0);

 keysToDelete.forEach(key => delete result[key])

write(result);