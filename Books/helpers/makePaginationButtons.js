import {tfoot} from '../script.js'
import {makeNewURL} from './makeNewURL.js'
import {bookName} from '../script.js'
import {createNewRow} from './createNewRow.js'
import {tbody} from '../script.js'
import { doGet } from './request.js'


export let currentPage = 1 ;

export function makePaginationButtons(pageCount) {
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
               createNewRow(book.title, book.author_name, book.publish_year, book.subject);
             })
         })
     })
   }
}    
   