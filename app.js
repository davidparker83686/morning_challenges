4 / 20 / 21
// MY ANSWER
// function decode(data) {
//   code = []

//   maxOne = 
//   maxTwo = 
//   maxThree = 
//   maxFour = 
//   maxFive = 
//   maxSix = 
//   maxEight = 
    
//   for (let index = 0; index < array.length; index++) {
//   }
//   return 
// }

eedadn
drvtee
eandsr
raavrd
atevrs
tsrnev
sdttsa
rasrtv
nssdts
ntnada
svetve
tesnvt
vntsnd
vrdear
dvrsen
enarar

answer is EASTER

MARKS ANSWER

function repeater(array) {
  let out =""
  for (let col = 0; col < arr[0].length; coll++){
    
    let seen = {}
    let highestCount = 0
    let highestLetter = ''
    for (let row = 0; row < arr.length; row++){
      let char = arr[row][col]
      seen[char] = seen[char] || 0
      seen[char]++
      if (seen[char] > highestCount) {
        highestLetter = char
        highestCount = seen [char]
      }
    }
    out+=highestLetter

  }
  return out
}