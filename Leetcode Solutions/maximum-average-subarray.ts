function maxSubArray(arr: number[], k: number): number {

    let max = Number.MIN_VALUE;
    let currentSum = 0;

    (function () {
        let sum = 0;
        for (let i = 0; i < k; i++) {
            sum += arr[i];
        }

        currentSum = sum;
        max = Math.max(sum / k, max);
    }
    )()

    for (let end = k; end < arr.length; end++) {
        currentSum-=arr[end - k];
        currentSum+=arr[end];
        max = Math.max(currentSum / k, max);
    }

    return max;

}

console.log(maxSubArray([1, 12, -5, -6, 50, 3], 4))