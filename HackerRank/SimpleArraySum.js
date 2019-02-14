// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
  return ar.reduce((acc, current) => acc + current, 0)
}
