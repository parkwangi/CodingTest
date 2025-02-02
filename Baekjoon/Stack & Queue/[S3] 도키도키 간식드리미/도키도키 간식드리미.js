const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

function solution(input) {
  const N = parseInt(input.shift());
  const numbers = Array.from(input[0].split(' ').map(Number));

  let currentNum = 1;
  const stack = [];

  while(currentNum <= N){
    if(currentNum === stack[stack.length-1]){
      stack.pop();
      currentNum += 1;
    }
    else {
      if(numbers.length === 0){
        return 'Sad'
      }
      let now = numbers.shift();
      if(now === currentNum){
        currentNum += 1;
      }
      else {
        stack.push(now);
      }
    }
  }
  return stack.length === 0 ? 'Nice' : 'Sad'
}
console.log(solution(input));