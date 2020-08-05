function makeCellContent(key, value) {
  
    let content = document.createElement("div");
    let contentKey = document.createElement("h4");
    let contentValue = document.createElement("p");
  
    contentKey.textContent = `${key}`;
    contentValue.textContent = `${value}`;
  
    contentKey.classList.add("key");
    contentValue.classList.add("value");
    content.appendChild(contentKey);
    content.appendChild(contentValue);
  
    return content;
  }

export { makeCellContent }