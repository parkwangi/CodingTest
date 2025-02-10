function solution(order) {
  let answer = 0;
  const stack = [];
  let current = 1;
  for(let i = 0; i < order.length; i++){
    const target = order[i];

    while(current <= target){
      stack.push(current);
      current += 1;
    }

    if(stack[stack.length - 1] === target){
      stack.pop();
      answer += 1;
    }
    else {
      break;
    }
  }
  return answer;
}
console.log(solution([4, 3, 1, 2, 5]));