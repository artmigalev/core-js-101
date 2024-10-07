function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const boll = {
    start: {
      true: '[',
      false: '(',
    },
    end: {
      true: ']',
      false: ')',
    },
  };
  if (a < b) {
    return `${boll.start[isStartIncluded]}${a}, ${b}${boll.end[isEndIncluded]}`;
  } else {
    return `${boll.start[isStartIncluded]}${b}, ${a}${boll.end[isEndIncluded]}`;
  }
}

getIntervalString(0, 1, false, true);
