const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

class Queue {
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value) {
    const node = {value, next:null};

    if(this.size === 0){
      this.head = node;
      this.tail = node;
      this.size ++;
    }
    else{
      this.tail.next = node;
      this.tail = node;
      this.size ++;
    }
  }

  pop() {
    if(this.size === 0) return;
    const value = this.head.value;
    this.head = this.head.next;
    this.size --;
    if(this.size === 0) this.tail = null;

    return value;
  }

  getSize() {
    return this.size;
  }

  fromArray(arr) {
    arr.forEach(value => this.push(value));
  }

}

function solution(N) {
  const queue = new Queue();
  const card = Array.from({length: N}, (v, i) => i+1);
  queue.fromArray(card);
  while(queue.getSize() > 1) {
    queue.pop();
    const move = queue.pop();
    queue.push(move);
  }
  return queue.head.value;
}
console.log(solution(N));