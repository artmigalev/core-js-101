function generateOdds(len) {
  var n = -1;
  const arr = Array(len).fill(1);
  return arr.map(() => {

    return n += 2; });
}

console.log(generateOdds(1))


