// Complete the function compareTriplets in the editor below. It must return an array of two integers, the first being Alice's score and the second being Bob's.
//
// compareTriplets has the following parameter(s):
//
//   a: an array of integers representing Alice's challenge rating
//   b: an array of integers representing Bob's challenge rating


function compareTriplets(a, b) {
  let aScore = 0
  let bScore = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
        aScore += 1
    } else if (a[i] < b[i]) {
        bScore += 1
    }
  }
  return [aScore, bScore]
}
