/* a function that checks if all elements in an array exist is a set */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
