class Queue {
    constructor() {
        this._collection = [];
    }
    enqueue(...elements) {
        return this._collection.push(...elements);
    }
    dequeue() {
        return this._collection.shift();
    }
    get collection() {
        return this._collection;
    }
}
const queue = new Queue();
queue.enqueue(10);
console.log(queue.collection);
