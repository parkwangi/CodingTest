const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
// console.log(input);
function solution(input) {
  const answer = input.map((str) => {
    if(str[0] === '.') return;
    const stack = [];
    for(const c of str) {
      if (c === '(' || c === '[') {
        stack.push(c);
      } else if (c === ')') {
        if (stack.length > 0 && stack[stack.length -1] === '(') stack.pop();
        else {
          return 'no';
        }
      } else if (c === ']') {
        if (stack.length > 0 && stack[stack.length -1] === '[') stack.pop();
        else {
          return 'no';
        }
      }
    }
    return stack.length === 0 ? 'yes' : 'no';
  });
  return answer.join('\n');
}
console.log(solution(input));