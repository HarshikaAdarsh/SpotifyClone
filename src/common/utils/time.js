export function appendZero(num) {
  if (num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

export function getMinAndSec(duration) {
  const min = Math.floor(duration / 60);
  const seconds = duration - 60 * min;

  return { min: appendZero(min), seconds: appendZero(seconds) };
}
