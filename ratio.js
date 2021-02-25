const get = (streets, cars) =>{

    const streetOccurences = new Map()

   const allStreets =  [].concat(...cars.map(x => x.streets))
    streets.forEach(street => {
        streetOccurences.set(street.name, allStreets.filter(x => x === street.name).length)
    });


    return streetOccurences

}

module.exports = {
    get
}