import * as fs from "fs";
import * as path from "path";

/**
 * Formats an object to string
 * @param log
 * @returns
 */
export const format = (log: any) => JSON.stringify(log, null, 2);

/**
 * Creates a counter function using a closure
 * @returns
 */
export function createCounter() {
  let count = 0;

  function counter() {
    return ++count;
  }

  return counter;
}

/**
 * Logs text to a file
 * @param text
 * @param dir
 */
export const fileLog = (text: string, dir = "./") => {
  const logPath = path.join(dir, createLogFileName());

  fs.writeFileSync(logPath, `${text}` + "\n", {
    flag: "a",
  });
};

/**
 * Returns the current date and time in the format: YYYY-MM-DD HH:MM:SS
 * @returns
 */
export function getCurrentDateTime() {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("en-US", options);
}

/**
 * Creates a log file name in the format: log_YYYY-MM-DD.log
 * @returns
 */
function createLogFileName(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const fileName = `log_${year}-${month}-${day}.log`;
  return fileName;
}
