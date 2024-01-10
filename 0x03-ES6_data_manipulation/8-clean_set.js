/* a function that returns a string of all the set values
that start with a specific string (startString). */
export default function cleanSet(set, startString) {
  return Array.from(set)
    .filter((value) => typeof (startString) === 'string' && startString && value
      && startString !== value && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
