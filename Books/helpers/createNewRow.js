import {tbody} from '../script.js'
import {sliceFirstThreeItems} from './sliceFirstThreeItems.js'

export function createNewRow(title, name, year, subject){

    let isNotValid = !title || !name || !year || !subject
    if (isNotValid) {
          return;
    }

    const newRow = tbody.insertRow(tbody.length)
    const titleCell = newRow.insertCell(0)
    const authorNameCell = newRow.insertCell(1)
    const publishedYearCell = newRow.insertCell(2)
    const subjectCell = newRow.insertCell(3)
   
    let firstPublishYear = Array.from(year)[0]
    
    titleCell.innerText = title
    authorNameCell.innerText = name
    publishedYearCell.innerText = firstPublishYear
    subjectCell.innerText = sliceFirstThreeItems(subject)
    console.log(year)
    console.log(subject)
    
    return newRow;
}