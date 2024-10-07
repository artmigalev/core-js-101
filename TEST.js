function isCreditCardNumber(ccn) {
  const controlNum = Number(
    ccn.toString().slice(ccn.toString().length - 1, ccn.toString().length)
  );
  let second = true;
  const digits = ccn.toString().split('');
  let sum = 0;
  for (let ind = digits.length - 2; ind >= 0; ind--) {
    let digit = Number(digits[ind]);
    if (second) {
      digit *= 2;
      if (digit > 9) {
        digit = Math.trunc(digit / 10) + (digit % 10);
      }
    }
    sum += digit;
    second = !second;
  }
  console.log(sum, (10 - (sum % 10)) % 10 === controlNum);
}

isCreditCardNumber(54891243456789010);
