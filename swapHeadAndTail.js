function swapHeadAndTail(arr) {
  let len = arr.length;
  let midle = arr.reduce((a, b) => (a + b)) / len;
  let result = [];
  console.log(midle);
  if (len <= 3) {
    return arr.reverse();
  } else if (len % 2 === 0) {
    // console.log(midle)
    result.push(...arr.slice(midle, len));
    result.push(...arr.slice(0, midle));
    return result;
  } else if (!len % 2 === 0) {
    result.push(...arr.slice(midle++, len));
    result.push(...arr.slice(midle));
    result.push(...arr.slice(midle--, len));
  }
  // return
}
