import {BASE_URL} from '../constants/api.js'

export function makeNewURL(bookName, page = 1) {

  const searchParam = new URLSearchParams(`q`);
  
  searchParam.set("q", `${bookName}`);
  const newURL = `${BASE_URL}?${searchParam}&page=${page}`;

  return newURL;
}
