let div = document.getElementById('container')
// the id 'containter' is in the html file. Had it not been, it would of had to be created, which is what was done above. 

const request = async () => {
    let req = await fetch ('https://raw.githubusercontent.com/rmdashrfv/javascript-fundamentals/main/mock_data.json')
    let res = await req.json()
    console.log('Response', res)
    res.forEach((element) => {
        let img = document.createElement('img')
        let button = document.createElement('button')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        button.innerText = `Rent Building ${element.id}`
        h3.innerText = `${element.company_name}`
        h4.innerText = `Vacancies: ${element.vacancies}`
        button.addEventListener('click', () => {
            let updatedVacancies = --element.vacancies
            if (updatedVacancies <= 0) return alert('NO MORE VACANCIES');
            h4.innerText = `Vacancies: ${--element.vacancies}`
        })
        img.setAttribute('src', element.photo)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(img)
        div.appendChild(button)
        
    })
}
request()
