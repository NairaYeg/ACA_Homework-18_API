import {doGet} from './helpers/request.js'
import {createTableRow} from './helpers/createTableRow.js'

export const tbody = document.querySelector('tbody')
const thead = document.querySelector('thead')
const title = document.querySelector('#title')
const loading = document.querySelector('h3')
const copyright = document.querySelector('#copyright')


doGet('https://ghibliapi.herokuapp.com/films')
.then((films)=>{
    loading.style.display = 'none'
    title.style.display = 'block'
    copyright.style.display = 'block'
    films.map(film =>{ 
       createTableRow(film) 
    })
})