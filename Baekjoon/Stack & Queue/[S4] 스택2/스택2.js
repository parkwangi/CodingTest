const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");


function solution(numbers) {
  const N = numbers.shift();
  const stack = [];
  const answer=[];

  numbers.forEach((num)=> {
    const [command, value] = num.split(' ');
    switch(command) {
      case '1':
        stack.push(parseInt(value));
        break;
      case '2':
        answer.push(stack.length === 0 ? -1 : stack.pop());
        break;
      case '3':
        answer.push(stack.length);
        break;
      case '4':
        answer.push(stack.length === 0 ? 1 : 0);
        break;
      case '5':
        answer.push(stack.length === 0 ? -1 : stack[stack.length-1]);
        break;
      default:
        break;
    }
  })
  return answer.join('\n');
}
console.log(solution(input));