const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");


function solution(input) {
  const [N, K] = input[0].split(' ').map(Number);
  const stack = [];
  const people = Array.from({length: N}, (v, i) => i+1);
  // let index = K - 1;
  // while(people.length > 0){
  //   index = index % people.length
  //   const removed = people.splice(index % people.length, 1);
  //   stack.push(removed[0]);
  //
  //   index += K - 1;
  // }
  let count = 1;
  while(people.length){
    const number = people.shift();
    if(count % K === 0){
      stack.push(number);
    }
    else {
      people.push(number);
    }
    count+=1;
  }
  return `<${stack.join(', ')}>`;
}

console.log(solution(input));
