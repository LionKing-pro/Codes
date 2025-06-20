//1
let h = "hello"
h.split('')

//2
let n1 = [1,2,3]
let n2 = [4,5,6]
n1.concat(n2)

//3
let e = "Hello"
d = e.split().concat("world".concat('!'))

//4
let a = "apple"
let b = "banana"
let c = "cherry"
a.split().concat(b,c).slice(0,-1)

//5
let o1 = [10,20,30,40,50]
o1.slice(0,-3)

//6
let h1 = "Hello"
h1.split('').join('').toString()

//7
let r = 'red'
let g = 'green'
let b1 = 'blue'
r.split().concat(g,b1).includes('green')

//8
let n11 = [1,2,3,4,5,6]
n11.filter(number => number % 2 !== 0)

//9
let n10 = [1, 2, 3, 4]
n10.map(number => number * 2)

//10
let m =  [1, 3, 7, 8, 10]
m.find(num => num % 2 === 0)

//11
let q = [5, 2, 8, 1, 4]
q.sort((a, b) => a - b)

//12
let v = [1, 2, 3, 4]
v.reverse()

//13
let ab = ["apple", "banana", "apple", "cherry", "apple"];
let wordToCount = 'apple';
let count = ab.reduce((acc, word) => word === wordToCount ? acc + 1 : acc, 0);
console.log(count)

//14
let hj = [1, 2, 2, 3, 4, 4, 5]
hj.filter((value, index, self) => { return self.indexOf(value) === index; })

//15
let ghjg = [[1, 2], [3, 4], [5, 6]]
ghjg.slice([])

//16
function countElements(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
}

const myArray = ['a', 'b', 'a', 'c', 'b', 'a'];
const elementCounts = countElements(myArray);
console.log(elementCounts);

//17
let HJHJ = [['name', 'Alex'], ['age', 25], ['city', 'Toronto']]
HJHJ.slice([])

//18
function sortByWordLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

const words = ['apple', 'banana', 'kiwi', 'cherry'];
const sortedWords = sortByWordLength(words);
console.log(sortedWords);

//19
let jkl = ['John', 'Jane', 'Smith']
jkl.toString().replace("Jane,Smith", " Jane & Smith")

//20
function findLongestWord(arr) {
  if (!arr || arr.length === 0) {
    return ""
  }

  let longestWord = "";
  for (const word of arr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const words1 = ["dog", "elephant", "cat", "giraffe"];
const longest = findLongestWord(words1);
console.log(longest);