class Stack {

    private name: string;
    private values: any[];

    constructor(name:string, values?:any[]){
        this.name = name;
        this.values = values || [];
    }

    push(value:any) {
        this.values.push(value)
    }

    introduction() {
        return `My name is ${this.name} and I have ${this.values.length} entries`;
    }

    getValues() {
        return this.values;
    }
}

const stack = new Stack('Sample Stack', [1, 2, 3, 4, 5])

console.log(stack.introduction())

stack.push(10)
stack.push(10)
stack.push(10)
stack.push(10)
stack.push(10)

console.log(stack.getValues());

console.log(stack.introduction())

