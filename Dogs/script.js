import {doGet} from './helpers/request.js'

const breedList = document.querySelector('#breeds')
const wrapper = document.querySelector('.wrapper')
const dogImg = document.querySelector('img')

breedList.addEventListener("change", () => {
   const url = `https://dog.ceo/api/breed/${breedList.value}/images/random`;
   doGet(url)
     .then((r) => {
       dogImg.classList.add("show-img");
       dogImg.src = r.message;
     })
     .catch((error) => {
       wrapper.innerHTML = error.message;
     });
 });
 