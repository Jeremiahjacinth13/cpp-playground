
function maxArraySumBrute (array: number[], k: number): number {

    let maxSum = 0;

    for (let i = 0; i < array.length - k + 1; i++) {
        
        let currentSum = 0;

        for (let j = i; j < i + k; j++) {
            currentSum += array[j];
        }

        maxSum = Math.max(currentSum, maxSum);
    }


    return maxSum;
}


function maxArraySumWithSlidingWindowTechnique (array: number[], k: number): number {
    
    let currentSum = 0;
    let maxSum = Infinity;

    for (let i = 0; i < k; i++) {
        currentSum += array[i]
    }
    
    maxSum = currentSum;

    for (let i = 1; i < array.length - k; i++) {

        // console.log(maxSum)
        let uncalculatedElement = array[i + k - 1];
        let previousElement = array[i - 1];

        currentSum-= previousElement;
        currentSum+=uncalculatedElement;

        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum;
}


console.log(maxArraySumWithSlidingWindowTechnique([10, 2, 3, 4, 5, 14, 7, 8, 9, 3], 3)); // 27