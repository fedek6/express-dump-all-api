import * as fs from "fs";

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

export const fileLog = (text: string) =>
  fs.writeFileSync(createLogFileName(), text + "\n", { flag: "a" });

function createLogFileName(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const fileName = `log_${year}-${month}-${day}.log`;
  return fileName;
}
