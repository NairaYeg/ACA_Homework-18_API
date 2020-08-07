import {makeNewURL} from './helpers/makeNewURL.js'
import {createNewRow} from './helpers/createNewRow.js'
import {makePaginationButtons} from './helpers/makePaginationButtons.js'
import {rowsPerPage} from './helpers/constants.js'


const input = document.querySelector('#book-input')
const searchBtn = document.querySelector('.search-btn')
const thead = document.querySelector('thead')
const tbody = document.querySelector('tbody')
const tfoot = document.querySelector('tfoot')
const numFound = document.querySelector('#numFound')
let bookName = '';
let pageCount;


searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  bookName = input.value;
  tfoot.innerText = "";
  tbody.innerText = "Loading......";
  numFound.innerText = "";

  const url = makeNewURL(input.value);

  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      tbody.innerText = "";
      numFound.innerText = `${r.numFound}`;

      if (r.numFound === 0) {
        tbody.innerText = `Your search did not match any documents.....`;
        return;
      }

      pageCount = Math.ceil(r.numFound / rowsPerPage);
      makePaginationButtons(pageCount);

      r.docs.forEach((item) => {
        createNewRow(item.title, item.author_name, item.publish_year,item.subject);
      });
    })
    .catch((error) => {
      tbody.innerText = error.message;
    });

  input.value = "";
});


export {thead, tbody, tfoot, bookName} 