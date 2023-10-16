function getSumBetweenNumbers(n1, n2) {
  let n3 = n2-n1;
  let result=n1;
  for( let i=1; i<n3+1; i++){
    result += (n1 + i)
  }
  return result;
}

console.log(getSumBetweenNumbers(5,10))
