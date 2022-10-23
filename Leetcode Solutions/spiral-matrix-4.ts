/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next)
    }

    public static fromArray(array: number[]): ListNode {

        let currNode = new ListNode(array[0]);
        let head = currNode;
        let nextNode: ListNode;

        for (let i = 0; i < array.length - 1; i++) {
            nextNode = new ListNode(array[i + 1]);
            currNode.next = nextNode;

            currNode = nextNode;
        }

        return head;
    }
}

type Point = { x: number, y: number }

function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {

    const matrix = generateMatrix(m, n);
    let curr = head;
    const startPoint = { x: 0, y: 0 } as Point;


    if (curr) {
        fillMatrix(matrix, curr, startPoint);
    }

    return matrix;
};

function fillMatrix(matrix: number[][], curr: ListNode | null, startPoint: Point): void {

    if (!curr) {
        return;
    } else {
        fillToLeft()
        fillToBottom()
        printMatrix(matrix)
    }

    function fillToLeft() {
        for (let i = startPoint.x; i < matrix[0].length && !matrix[startPoint.y][startPoint.x] && curr; i++) {
            matrix[startPoint.y][startPoint.x] = curr.val;
            curr = curr.next;
            startPoint.x = Math.min(startPoint.x + 1, matrix[0].length - 1);
        }
    }

    function fillToRight() {

    }

    function fillToTop() {

    }

    function fillToBottom() {
        for (let i = startPoint.y; i < matrix.length && !matrix[startPoint.y][startPoint.x] && curr; i++) {
            if (startPoint.y >= matrix.length) {
                return;
            }
            matrix[startPoint.y][startPoint.x] = curr.val;
            curr = curr.next;
            startPoint.y = Math.min(startPoint.y + 1, matrix.length - 1);
        }
    }
}


function generateMatrix(m: number, n: number): number[][] {
    const matrix: number[][] = [];

    for (let i = 0; i < m; i++) {
        matrix.push((Array.from({ length: n }).fill(-1) as number[]));
    }
    return matrix;
}

let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const head = ListNode.fromArray(arr)

function printMatrix (matrix: number[][]) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i])
    }
}

spiralMatrix(4, 4, head);
