import {makeNewURL} from './helpers/makeNewURL.js'
import {createNewRow} from './helpers/createNewRow.js'
import {makePaginationButtons} from './helpers/makePaginationButtons.js'

const input = document.querySelector('#book-input')
const searchBtn = document.querySelector('.search-btn')
export const thead = document.querySelector('thead')
export const tbody = document.querySelector('tbody')
export const tfoot = document.querySelector('tfoot')
const numFound = document.querySelector('#numFound')
const rowsPerPage = 100
export let searchValue;
let pageCount;

searchBtn.addEventListener("click", (event) => {

  event.preventDefault();
  searchValue = input.value
  tfoot.innerText = ''
  tbody.innerText = "Loading......"; 
  numFound.innerText = ''

  const url = makeNewURL(input.value);

  fetch(url)
    .then((r) => r.json())
    .then((r) => {

      tbody.innerText = ''
      numFound.innerText = `${r.numFound}`

      pageCount = Math.ceil(r.numFound/rowsPerPage)
      

      makePaginationButtons(pageCount)

      r.docs.forEach((item) => {
        createNewRow(item.title, item.author_name, item.publish_year, item.subject);
      });
    })
    .catch((error) => {
      tbody.innerText = error.message;
    });

      input.value = "";
});

