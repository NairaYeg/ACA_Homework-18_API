import {doGet} from './helpers/request.js'

const breedList = document.querySelector('#breeds')
const wrapper = document.querySelector('.wrapper')
const dogImg = document.querySelector('img')

breedList.addEventListener("change", () => {
  wrapper.innerText = "Loading.....";
  const url = `https://dog.ceo/api/breed/${breedList.value}/images/random`;
  doGet(url)
    .then((r) => {
      wrapper.innerText = "";
      if (r.status === "success") {
        dogImg.classList.add("show-img");
        dogImg.src = r.message;
        wrapper.append(dogImg);
      } else {
        wrapper.innerHTML = "Oops!!!!! Something has gone wrong";
      }
    })
    .catch((error) => {
      wrapper.innerHTML = "Oops!!!!! Something has gone wrong";
    });
});
