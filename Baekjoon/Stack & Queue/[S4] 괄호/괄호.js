const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// const parenthesis = Array.from(input.map(Number));

function solution(input) {
  const T = input.shift();

  const answer = input.map(str => {
    let stack = [];
    for( const c of str){
      if(c === '('){
        stack.push(c);
      }
      else{
        if(stack.length === 0){
          return 'NO';
        }
        stack.pop();
      }
    }
    return stack.length === 0 ?'YES': 'NO';
  });

  return answer.join('\n');
}
console.log(solution(input));