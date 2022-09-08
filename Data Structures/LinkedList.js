'use strict'

class ListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }

  static createNode(value) {
    if (value instanceof ListNode) {
      return new this(value.value)
    }

    return new this(value)
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode(null, null)
  }

  static fromArray(nodeValues) {
    const linkedlist = new this()

    linkedlist.head = ListNode.createNode(nodeValues[0])

    let currentNode = linkedlist.head

    for (let i = 1; i < nodeValues.length; i++) {
      const newNode = ListNode.createNode(nodeValues[i])
      currentNode.next = newNode
      currentNode = newNode
    }

    return linkedlist
  }

  toArray() {
    const array = []
    let current = this.head;

    while (current) {
      array.push(current.value);
      current = current.next;
    }

    return array;
  }

  insert(value, after) {
    let currentNode = this.head

    // find the before element
    while (currentNode && currentNode.value !== after) {
      currentNode = currentNode.next
    }

    if (currentNode) {
      let initialNext = currentNode.next
      const newNext = ListNode.createNode(value)
      newNext.next = initialNext
      currentNode.next = newNext

      return true
    } else {
      return false
    }
  }

  reverse () {
    const array = this.toArray()
    const list = LinkedList.fromArray(array.reverse())
    return list
  }

  search(value) {
    let index = 0
    let current = this.head

    while (current.value !== value && current.next) {
      current = current.next
      index++
    }

    if (current.value === value) {
      return current
    }
    return -1
  }

  sort(customSortFn) {
    // 1 => 4 => 5 => 6 => 3 => 2

    // 1 => 4
    // 1 => 2 => 2 => 5 => 6

    const newLinkedList = new LinkedList()
    newLinkedList.head = ListNode.createNode(this.head)

    let current = this.head 

    while (current) {
        current = current.next; // ListNode(5)

        if (current.value < newLinkedList.head) {
            let tempNext = newLinkedList.head.next;
            newLinkedList.head = ListNode.createNode(current.value);
            newLinkedList.head.next = tempNext;
        }

        let sortedCurrent = newLinkedList.head; // ListNode(1)

        while (sortedCurrent) {
            if (sortedCurrent.value < current.value) {
                sortedCurrent.next = ListNode.createNode(current.value)
            } else {

            }

            sortedCurrent = sortedCurrent.next;
        }
        
    }

    return newLinkedList;
  }

  delete(value) {
    if (value === this.head) {
      let next = this.head.next
      this.head = next
      delete this.head

      return true
    }

    let current = this.head

    while (current.next.value !== value) {
      current = current.next
    }

    if (current.next.value === value) {
      let newNext = current.next.next

      delete current.next

      current.next = newNext
      return true
    }
    return false
  }

  display() {
    let currentNode = this.head
    let returnString = ``

    while (currentNode) {
      returnString += `${currentNode.value} ---->`
      currentNode = currentNode.next
    }

    returnString += ' null'

    console.log(returnString)
    return returnString
  }

  get size() {
    let current = this.head
    let count = 0

    while (current) {
      count = count + 1;
      current = current.next;
    }

    return count;
  }
}


const linkedlist = LinkedList.fromArray([4, 3, 2, 3, 5, 4, 5, 3, 0, 59, 499, 30])
const reversed = linkedlist.reverse()

linkedlist.display()
reversed.display()