function makeCellContent(key, value) {
  
    const content = document.createElement("div");
    const contentKey = document.createElement("h4");
    const contentValue = document.createElement("p");
  
    contentKey.textContent = `${key}`;
    contentValue.textContent = `${value}`;
  
    contentKey.classList.add("key");
    contentValue.classList.add("value");
    content.appendChild(contentKey);
    content.appendChild(contentValue);
  
    return content;
  }

export { makeCellContent }