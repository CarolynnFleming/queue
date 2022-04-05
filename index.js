
class Queue  {
    //constructor that takes in one property
    constructor() {
        this.queue = [];
    }
//adding an item to the first index in the array
    enqueue(item) {
        return this.queue.unshift(item);
        
    }

    dequeue() {
//removes the first item in the queue of the last item in the array if statment, so that if there is no more items in array returns null
        if(this.hasNext()){
            return this.queue.pop();
        } else {
            return null;
        }
    }

    hasNext() {
        //returns true if queue is empty
        return this.queue.length !== 0;
    }
}

const queue = new Queue();
queue.enqueue('fox');
queue.enqueue('goose');
queue.enqueue('lizard');
console.log(queue.dequeue()); // 'fox'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'goose'
queue.enqueue('llama');
console.log(queue.dequeue()); // 'lizard'
console.log(queue.hasNext()); // true
console.log(queue.dequeue()); // 'llama'
console.log(queue.hasNext()); // false
console.log(queue.dequeue()); // null