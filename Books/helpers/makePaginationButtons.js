import {tfoot} from '../script.js'
import {makeNewURL} from './makeNewURL.js'
import {searchValue} from '../script.js'
import {createNewRow} from './createNewRow.js'
import {tbody} from '../script.js'


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
       let url = makeNewURL(searchValue, currentPage)
       fetch(url)
         .then(r => r.json())
         .then(r => {
            tbody.innerText = ''
            r.docs.forEach((item) => {
               createNewRow(item.title, item.author_name, item.publish_year, item.subject);
             })
         })
      

       console.log(currentPage);
       console.log(makeNewURL(searchValue, currentPage)); 
     })
   }
}    
   