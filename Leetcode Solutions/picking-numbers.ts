// Hackerrank problem
// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumber(nums: number[]): number {

    let maxArray = 0;
    const map: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const valueInMap = map[nums[i]]
        if (valueInMap) {
            map[nums[i]] = valueInMap + 1;
        } else {
            map[nums[i]] = 1;
        }
    }

    const keys = Array.from(Object.keys(map));
    const values = Array.from(Object.values(map));

    console.log(keys, values)

    for (let i = 0; i < keys.length; i++) {
        const currKey = keys[i];
        const currValue = values[i];
        const nextKey = keys[i + 1];
        const nextValue = values[i + 1];

        const absDiff = Math.abs(Number(currKey) - Number(nextKey));

        if (absDiff <= 1) {
            maxArray = Math.max(maxArray, currValue + nextValue);
        }
    }

    return maxArray;
}

console.log(pickingNumber([1, 2, 2, 3, 1, 2]))
