// Create an empty stack (array)
const stack = [];

// elements,push onto stack
stack.push('r');
stack.push('i');
stack.push('c');
stack.push('h');
stack.push('a');

// Pop elements off stack and concatenate to form the output string
let outputString = "";
while (stack.length > 0) { // here i use stack.length>0 bcoz jbtk ki stack ki length zero se bdi rhegi usme koi na koi element hoga hi
  outputString += stack.pop();
}
console.log("reverse string is: ", outputString);




























//class Stack {
    //     constructor() {
    //       this.items = [];
    //     }
      
    //     push(element) {
    //       this.items.push(element);
    //     }
      
    //     pop() {
    //       if (this.items.length === 0) {
    //         return "Stack is empty";
    //       }
    //       return this.items.pop();
    //     }
      
    //     printStack() {
    //       for (let i = 0; i < this.items.length; i++) {
    //         console.log(this.items[i]);
    //       }
    //     }
    //   }
      
    //   // Example usage:
    //   let stack = new Stack();
    //   stack.push(10);
    //   stack.push(20);
    //   stack.push(30);
      
    //   stack.printStack();