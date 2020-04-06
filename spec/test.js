function uniq(array) {
  let copy = [];
  for (let element of array) {
    copy.push(element);
  }

  for (let i = 0; i < array.length; i++) {
    for (let y = i + 1; y < copy.length; y++) {
      if (copy[y] === array[i]) {
        copy[y] = "duplicate";
      }
    }
  }

  let result = [];

  for (const element of copy) {
    if (element != "duplicate") {
      result.push(element);
    }
  }

  return result;
}

const numbers = [5, 3, 2, 1, 5, 6, 1, 3];
console.log(uniq(numbers)); // [5, 3, 2, 1, 6]
