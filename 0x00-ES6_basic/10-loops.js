/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  const __array = []
  for (const value of array) {
    __array.push(appendString + value);
  }

  return __array;
}
