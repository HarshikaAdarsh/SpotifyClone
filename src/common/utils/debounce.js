export function debounce(callback, delay = 500) {
  let timeoutId = null;

  return e => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(callback, delay, e);
  };
}
