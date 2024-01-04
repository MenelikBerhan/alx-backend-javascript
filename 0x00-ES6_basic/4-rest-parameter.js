/* eslint-disable no-unused-vars */
export default function returnHowManyArguments(...args) {
  let count = 0;
  for (const arg of args) count += 1;
  return count;
}
