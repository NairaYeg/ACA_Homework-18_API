import {makeNewURL} from './helpers/makeNewURL.js'

const input = document.querySelector('#book-input')
const searchBtn = document.querySelector('.search-btn')


searchBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    
   
    console.log( typeof json.parse(makeNewURL(input.value)))
    input.value = ''
})

