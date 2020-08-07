import {thead} from '../script.js'
import {tbody} from '../script.js'

export function createNewRow(title, name, year, subject){
    const newRow = tbody.insertRow(tbody.length)

    const titleCell = newRow.insertCell(0)
    const authorNameCell = newRow.insertCell(1)
    const publishedYearCell = newRow.insertCell(2)
    const subjectCell = newRow.insertCell(3)

    titleCell.innerText = title
    authorNameCell.innerText = name
    publishedYearCell.innerText = year
    subjectCell.innerText = subject

    return newRow;
}