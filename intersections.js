const get = (streets, cars) => {

    const interSections = new Map()

    const queue = new Map()

    cars.forEach((car,index)=>{
        if(!queue[car.streets[0]]) queue[car.streets[0]] = []
        queue[car.streets[0]].push(index) 
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