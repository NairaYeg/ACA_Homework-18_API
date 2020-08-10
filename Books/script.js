import {makeNewURL} from './helpers/makeNewURL.js'
import {createNewRow} from './helpers/createNewRow.js'
import {makePaginationButtons} from './helpers/makePaginationButtons.js'
import {rowsPerPage} from './helpers/constants.js'
import {doGet} from './helpers/request.js'


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

  doGet(url)
    .then((books) => {
      tbody.innerText = "";
      numFound.innerText = `${books.numFound}`;

      if (books.numFound === 0) {
        tbody.innerText = `Your search did not match any documents.....`;
        return;
      }
     
      pageCount = Math.ceil(books.numFound / rowsPerPage);
      makePaginationButtons(pageCount);

      books.docs.forEach((book) => {
        createNewRow(book.title, book.author_name, book.publish_year, book.subject);
      });
    })
    .catch((error) => {
      tbody.innerText = error.message;
    });

  input.value = "";
});


export {thead, tbody, tfoot, bookName} 