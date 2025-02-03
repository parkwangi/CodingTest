const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value){
    const node = {value, next: null};
    if(this.size === 0){
      this.head = node;
      this.tail = node;
    }
    else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  };

  pop(){
    if(this.size === 0) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    if(this.size === 0) this.tail = null;
    return value;
  }

  getSize() {
    return this.size;
  }

  empty(){
    return this.size === 0 ? 1 : 0;
  }

  front(){
    return this.size === 0 ? -1 : this.head.value;
  }

  back(){
    return this.size === 0 ? -1 : this.tail.value;
  }
}

function solution(input) {
  const N = input.shift();
  const queue = new Queue();
  const answer = [];
  input.forEach((item) =>{
    const [order, value] = item.split(' ');
    if(order === 'push'){
      queue.push(Number(value));
    }
    else if(order === 'pop'){
      return answer.push(queue.pop());
    }
    else if(order === 'size'){
      return answer.push(queue.getSize());
    }
    else if(order === 'empty'){
      return answer.push(queue.empty());
    }
    else if(order === 'front'){
      return answer.push(queue.front());
    }
    else if(order === 'back'){
      return answer.push(queue.back());
    }
  })
  return answer.join('\n');
}
console.log(solution(input));