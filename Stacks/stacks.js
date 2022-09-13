class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0

    }

    pop(){
        if(this.length === 1){
            let top = this.top
            this.top = null
            this.bottom = null
            this.length--
            return top
        }else{
             let top = this.top
             this.top == this.top.next
             this.length--
             return top
        }
    }

    push(data){
        const node = new Node(data)
        if(!this.top){
            this.top = node
            this.bottom = node
        }else {
            let temp = this.top
            this.top = node 
            this.top.next = temp
        }
        this.length++
        return this;
    }
    peek(){
        if(this.top){
            return this.top;
        } else {
            return "No Head"
        }
    }
}

const stack = new Stack();
stack.push('first node')
stack.push('second')
console.log(stack)