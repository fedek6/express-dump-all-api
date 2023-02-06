export function format(log: any) {
  return JSON.stringify(log, null, 2);
}

export function createCounter() {
  let count = 0;

  function counter() {
    return ++count;
  }

  return counter;
}
