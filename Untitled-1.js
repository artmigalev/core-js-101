function getIdentityMatrix(n) {
  let i = 0;
  let arr =[...Array(n)].map(() => {return Array(n).fill(0);});
  return arr.map((elem) => {
    elem.splice(i,1,1)
    i+=1
    return elem
  })

}
console.log(getIdentityMatrix(5))

