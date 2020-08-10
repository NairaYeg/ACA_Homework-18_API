import {tbody} from '../script.js'
import {makeCellContent} from './makeCellContent.js'

const createTableRow = (film) =>{
    const newRow = tbody.insertRow(tbody.length)

    const titleCell = newRow.insertCell(0)
    const descriptionCell = newRow.insertCell(1)
    const directorCell = newRow.insertCell(2)
    const producerCell = newRow.insertCell(3)
    const releaseDateCell = newRow.insertCell(4)

    titleCell.append(makeCellContent('Title: ', film.title))
    descriptionCell.append(makeCellContent('Description: ', film.description))
    directorCell.append(makeCellContent('Director: ', film.director))
    producerCell.append(makeCellContent('Producer: ', film.producer))
    releaseDateCell.append(makeCellContent('Release Date: ', film.release_date))

    return newRow;
}

export {createTableRow}


