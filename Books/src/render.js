import {tfoot} from './index.js'
import {tbody} from './index.js'
import {bookName} from './index.js'
import { doGet } from './helpers/request.js'
import {makeNewURL} from './helpers/makeNewURL.js'
import {sliceFirstThreeItems} from './helpers/array.helper.js'

export let currentPage = 1 ;


export function createNewRow(title, name, year, subject, body){

    let isNotValid = !title || !name || !year || !subject
    if (isNotValid) {
          return;
    }

    const newRow = body.insertRow(body.length)
    const titleCell = newRow.insertCell(0)
    const authorNameCell = newRow.insertCell(1)
    const publishedYearCell = newRow.insertCell(2)
    const subjectCell = newRow.insertCell(3)
   
    let firstPublishYear = Array.from(year)[0]
    
    titleCell.innerText = title
    authorNameCell.innerText = name
    publishedYearCell.innerText = firstPublishYear
    subjectCell.innerText = sliceFirstThreeItems(subject)
    
    return newRow;
}


export function makePaginationButtons(pageCount){
    const row = tfoot.insertRow(tfoot.length);
    for (let i = 1; i <= pageCount; i++) {
      let btn = document.createElement("button");
      btn.classList.add("pagination-btn");
      btn.innerText = `${i}`;
      row.appendChild(btn)
 
 
      btn.addEventListener("click", (event) => {
        currentPage = i;
        tbody.innerText = 'Loading.....'
 
        let url = makeNewURL(bookName, currentPage)
        doGet(url)
          .then(books => {
            console.log(books.start)
             tbody.innerText = ''
             books.docs.forEach((book) => {
                createNewRow(book.title, book.author_name, book.publish_year, book.subject, tbody);
              })
          })
      })
    }
 }    
    