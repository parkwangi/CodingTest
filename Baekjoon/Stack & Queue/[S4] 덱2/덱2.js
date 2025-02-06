const filePath = process.platform === 'linux' ?
  '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  frontPush(value){
    const node = {value, next: null, prev: null};
    if(this.size === 0){
      this.head = node;
      this.tail = node;
    }
    else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;

    }
    this.size += 1;
  }

  backPush(value){
    const node = {value, next: null, prev: null};
    if(this.size === 0){
      this.head = node;
      this.tail = node;
    }
    else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }

  frontPop(){
    if(this.size === 0) return -1;
    const value = this.head.value;
    this.head = this.head.next;
    if(this.head){
      this.head.prev = this.head;
    }
    else{
      this.tail = null;
    }
    this.size -= 1;
    return value;
  }

  backPop(){
    if(this.size === 0) return -1;

    const value = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail){
      this.tail.next = this.tail;
    }
    else {
      this.head = null;
    }

    this.size -= 1;
    return value;
  }

  getSize() {
    return this.size;
  }

  empty(){
    return this.size === 0 ? 1 : 0;
  }

  getViewFront() {
    if(this.size === 0) return -1;
    else {
      return this.head.value;
    }
  }

  getViewBack() {
    if(this.size === 0) return -1;
    else{
      return this.tail.value;
    }
  }
}

function solution(input) {
  const N = parseInt(input.shift());
  const deque = new Deque();
  const answer = [];
  for(let i = 0; i < N; i ++ ){
    const [order, value] = input[i].split(' ').map(Number);

    switch (order) {
      case 1:
        deque.frontPush(value);
        break;
      case 2:
        deque.backPush(value);
        break;
      case 3:
        answer.push(deque.frontPop());
        break;
      case 4:
        answer.push(deque.backPop());
        break;
      case 5:
        answer.push(deque.getSize());
        break;
      case 6:
        answer.push(deque.empty());
        break;
      case 7:
        answer.push(deque.getViewFront());
        break;
      case 8:
        answer.push(deque.getViewBack());
    }
  }

  return answer.join('\n');
}
console.log(solution(input));