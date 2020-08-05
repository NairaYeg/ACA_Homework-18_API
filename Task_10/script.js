import {doGet} from './helpers/request.js'
import {addTableRow} from './helpers/addTableRow.js'

export const tbody = document.querySelector('tbody')

console.log(tbody.childNodes)

doGet('https://ghibliapi.herokuapp.com/films')
.then((films)=>{
    films.map(film =>{
       addTableRow(film) 
    })
})