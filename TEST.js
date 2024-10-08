function getDigitalRoot(num) {
  const numArray = Array.from(String(num), Number);
  const sum = numArray.reduce((acc, curr) => acc + curr, 0);
  return sum <= 9 ? sum : getDigitalRoot(sum);
}

getDigitalRoot(12345);
