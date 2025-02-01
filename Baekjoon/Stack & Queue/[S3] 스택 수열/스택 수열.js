const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const numbers = Array.from(input.map(Number));

function solution(numbers) {
  const result = [];
  const stack = [];
  let stackNum = 1; // 입력 숫자의 시작은 1부터
  let n = numbers.shift(); // Input의 길이

  for(let i = 0; i < n; i++){ // Input 순회
    let nextNum = numbers[i]; // Input 배열의 맨 앞숫자
    while(stackNum <= nextNum) { // 입력 숫자와 Input 배열의 맨 앞숫자 비교
      stack.push(stackNum);
      stackNum++; // 입력 숫자 증가
      result.push('+');
    }
    let stackPop = stack.pop(); // 입력 숫자가 더 크므로 pop
    result.push('-');
    if(stackPop !== nextNum){ // 이때 입력 숫자와 pop한 값이 같지 않으면 만들 수 없는 배열
      return 'NO';
    }

  }
  return result.join('\n');
}
console.log(solution(numbers));