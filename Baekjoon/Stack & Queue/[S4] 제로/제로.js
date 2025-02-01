const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const numbers = Array.from(input.map(Number));

function solution(numbers) {
  numbers.shift();
  const stack = [];

  numbers.forEach((num)=> {
    if(num !== 0) {
      stack.push(num);
    }
    else {
      stack.pop();
    }
  })
  /**
  const stack = numbers.reduce((stack, num) => {
    num !== 0 ? stack.push(num) : stack.pop();
    return stack;
  },[]);
    **/
  return stack.reduce((cur, acc) => cur + acc, 0);
}
console.log(solution(numbers));