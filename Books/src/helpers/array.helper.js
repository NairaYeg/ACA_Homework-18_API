export function sliceFirstThreeItems(subject) {
    let subjectArr = Array.from(subject);
    let [first, second, third, ...rest] = subjectArr;
    let tmp = [];
    tmp.push(first, second, third);
    let firstThreeItems = tmp.join("");
    return firstThreeItems;
  }
  