
class Queue {

    private _collection: any[]

    constructor() {
        this._collection = []
    }

    enqueue(...elements: any): any {
        return this._collection.push(...elements)
    }

    dequeue(): any {
        return this._collection.shift()
    }

    get collection() {
        return this._collection;
    }
}

const queue = new Queue()

queue.enqueue(10)

console.log(queue.collection)

