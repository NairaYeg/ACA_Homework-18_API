import {tbody} from '../script.js'

const addTableRow = (film) =>{
    const newRow = tbody.insertRow(tbody.length)

    let filmTitle = newRow.insertCell(0)
    let filmDescription = newRow.insertCell(1)
    let filmDirector = newRow.insertCell(2)
    let filmProducer = newRow.insertCell(3)
    let filmReleaseDate = newRow.insertCell(4)

    
    filmTitle.innerText = `Title:  ${film.title}`
    filmDescription.innerText = `Description:  ${film.description}`
    filmDirector.innerText = `Director:  ${film.director}`
    filmProducer.innerText = `Producer:  ${film.producer}`
    filmReleaseDate.innerText = `Release Date:  ${film.release_date}`

    return newRow;
}

export {addTableRow}