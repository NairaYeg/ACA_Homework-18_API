import {BASE_URL} from './constants.js'

export function makeNewURL(bookName) {
    
    const searchParam = new URLSearchParams(`q`);
    searchParam.set("q", `${bookName}`);
    const newURL = `${BASE_URL}?${searchParam}`;
  
    return newURL;
  }
  