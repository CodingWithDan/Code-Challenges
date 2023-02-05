//================================
  //Implementing a Queue
  //================================
  
//   In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.

//     The enqueue method takes in the item as a parameter, while the dequeue method does not.
//     The size method simply returns the number of items in the queue.

// Wait, what?

//     To enqueue an item into the queue means to insert an item into the back, or tail, of the queue.
//     To dequeue an item means means to remove the item at the front, or head, of the queue.
//     In a queue, we remove the item the least recently added.

// JavaScript Methodology

// Queues can be implemented in JavaScript using arrays.

// You can use the built in push or unshift functions in order to add items to the queue array as well as the shift or pop to remove them.

// As long as the tests pass, go for it!
  
//Queues are the key to getting javascript to work
//Here's a basic way to build it out below:

class Queue {
    constructor(){
      this.list = []
    }
    
    size() {
      return this.list.length
    }
    
    enqueue(item){
      this.list.push(item)
    }
    
    dequeue(){
      return this.list.shift()
    }
  }
  
  //The above can be optimized though. Shift is bad bc it's O(n) so it's linear and takes a long time
  //If you move away from an array and go more into an object, it'll be more efficient.
  
  class Queue {
    constructor(){
      this.list = []
    }
    
    size() {
      return this.list.length
    }
    
    enqueue(item){
      this.list.push(item)
    }
    
    dequeue(){
      return this.list.shift()
    }
  }
  