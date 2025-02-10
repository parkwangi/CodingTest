const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");


function solution(input) {
  const N = Number(input.shift());
  const numbers = input[0].split(' ').map(Number);
  const balloons = Array.from({length: N}, (v, i) => i + 1);
  const stack = [];
  let count = 0;

  while(balloons.length > 0){
    const move = balloons.shift();
    if(count % move === 0){
      stack.push(move);
      count = numbers.shift();
      continue;
    }
    else {
      balloons.push(move);
    }
    if(count > 0){
      count += 1;
    }
    else{
      count -= 1;
    }
  }
  return stack.join(' ');
}
console.log(solution(input));