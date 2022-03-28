let apt1 = {
    bedrooms: 4, 
    sqft: 50, 
    bathrooms: 3,
    windows: 0,
    rent: 4500,
    unit: '1A',
    
    tenants: []
    
}

let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathrooms: 2,
    windows: 2,
    rent: 1500,
    unit: '1B',
    tenants: []
}

let apt3 = {
    bedrooms: 2, 
    sqft: 51, 
    bathrooms: 3,
    windows: 2,
    rent: 2400,
    unit: '1C',
    tenants: []
}

let apt4 = {
    bedrooms: 0, 
    sqft: 11, 
    bathrooms: 0,
    windows: 0,
    rent: 900,
    unit: '1D',
    tenants: []
}

let tenant1 = {
    name: 'John Doe',
    creditScore: 765,
    salary: 75000,
    age: 28
}

let tenant2 = {
    name: 'Jane Doe',
    creditScore: 780,
    salary: 82000,
    age: 32
}


let building = {
    streetAddress: '140 East 56',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant) {
        if (apt.tenants.length === apt.bedrooms) {
          return `${apt.unit} is already full`
        }
        if (this.allowsPets === false && tenant.pet) {
            return `${apt.unit} is avaliable, but you must give ${tenant.pet} for adoption!`
        }
        apt.tenants.push(tenant)
        console.log(tenant.name, 'has rented out', apt.unit)
    },
    occupiedApts: function() {
    // returns only the apts which have tenants inside of them
    // condition to test: apt.tenants.length
    return this.apartments.filter((el) => {
        return el.tenants.length > 0
    })
    },
    fullApts: function() {
    // returns only the apt which are completely full
    // condition to test: apt.tenants.length === apt.bedrooms
    return this.apartments.filter((el) => {
        return el.tenants.length === el.bedrooms
    })
    
    },
    
    apartments: [apt1, apt2, apt3]
}

//building.apartments[1].windows
// use that code above to find the amount of windows in apartment 2. remember the array starts at 0 so thats why apt2 is found using [1]

const div = document.getElementById('building')
const render = () => {
    let h2 = document.createElement('h2')
    h2.innerText = building.streetAddress
    div.append(h2)
    let ul = document.createElement('ul')
    building.apartments.forEach((element) => {
        let li = document.createElement('li')
        let button = document.createElement('button')

        button.innerText = `RENT: Vacancies: + ${element.bedrooms}`
        li.innerText = `${element.unit}`

        button.addEventListener('click', () => {
            if (element.bedrooms <= 0) return alert ("SORRY, NEW YORK IS DEAD")
            let vacancies = element.bedrooms -1
            button.innerText = `Rent: Vacancies: ${vacancies}`
            li.innerText = `${element.unit} vacancies: ${vacancies}`
            element.bedrooms -= 1
        })
        li.append(button)
        ul.append(li)
    })
    div.append(h2, ul)
}
render()