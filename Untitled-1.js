function getSumBetweenNumbers(str) {
  const alphvitUpper = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const alphavitLower = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let searchArr = '';
  let result = '';
  let index = 0;
  for (let i = 0; i < str.length; i += 1) {

    if (str[i] === str[i].toUpperCase()) {
      searchArr = alphvitUpper;
      index = searchArr.indexOf(str[i]);
    } else if (str[i] === str[i].toLowerCase()) {
      searchArr = alphavitLower;
      index = alphavitLower.indexOf(str[i]);
    }
    if (str[i] === ' ') {
      result += ' ';
    } else {
      index += 13;
      if (index > 25) {
        index -= 26;
      }
      result += searchArr[index];
    }
  }
  return result;
}

console.log(getSumBetweenNumbers('Why did the chicken cross the road?'));
