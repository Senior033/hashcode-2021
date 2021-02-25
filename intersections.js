const get = (streets, cars) => {

    const interSections = new Map()

    const queue = new Map()

    cars.forEach((car,index)=>{
        queue[car.streets[0]] = [index]
    })

    streets.forEach(street => {
        if(!interSections[street.endIntersec]) interSections[street.endIntersec] = []
        interSections[street.endIntersec].push({name:street.name, state:false, queue:queue[street.name]||[]})
    })

    return interSections
}

module.exports = {
    get
}