class Queue {
    constructor() {
        this.elements = {}; 
        this.front = 0; 
        this.back = 0;
    }
    enqueue(element) {
        this.elements[this.back] = element; 
        this.back++;
    }

    dequeue() {
        const currentItem = this.elements[this.front];
        delete this.elements[currentItem];
        this.front++; 
        return currentItem;
    }
    
    peek() {
        return this.back - this.front
    }

    getLength() {
        return 
    }
}
 
let q = new Queue; 

for (let x = 0; x < 10; x++) {
    q.enqueue(x); 
    
}

    console.log(q.peek()); 
    console.log(q.dequeue()); 
    console.log(q.peek());

