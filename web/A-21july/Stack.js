class Stack {
    constructor() {
      this.items = [];
    }
    push(element) {
      this.items.push(element);
    }
    pop() {
      if (this.items.length == 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
    peek() {
      return this.items[this.items.length - 1];
    }
    isEmpty() {
      return this.items.length == 0;
    }
    size() {
      return this.items.length;
    }
  symmetric_difference(stk) {
      const result = new Stack();
      for (let i = 0; i < this.items.length; i++) {
        if (!stk.items.includes(this.items[i]) && !result.items.includes(this.items[i])) {
          result.push(this.items[i]);
        }
      }
      for (let i = 0; i < stk.items.length; i++) {
        if (!this.items.includes(stk.items[i]) && !result.items.includes(stk.items[i])) {
          result.push(stk.items[i]);
        }
      }
  
      return result;
    }
    
   displayStack(stack) {
    console.log("Stack elements are:");
    let str = "";
    for (let i = 0; i < stack.items.length; i++)
      str += stack.items[i] + " ";
    return str.trim();
   }
  }
  
  const stack1 = new Stack();
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  console.log("Stack1:");
  console.log(stack1.displayStack(stack1));
  const stack2 = new Stack();
  stack2.push(2);
  stack2.push(3);
  stack2.push(4);
  console.log("Stack2:");
  console.log(stack2.displayStack(stack2));
  const stack3 = new Stack();
  stack3.push(5);
  stack3.push(6);
  stack3.push(3);
  console.log("Stack3:");
  console.log(stack3.displayStack(stack3));
  console.log("Symmetric difference of stack1 and stack2:")
  let result = stack1.symmetric_difference(stack2); 
  console.log(result.displayStack(result));
  console.log("Symmetric difference of stack1 and stack3:")
  result = stack1.symmetric_difference(stack3); 
  console.log(result.displayStack(result));
  console.log("Symmetric difference of stack2 and stack3:")
  result = stack2.symmetric_difference(stack3); 
  console.log(result.displayStack(result));