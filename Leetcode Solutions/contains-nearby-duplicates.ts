function containsNearbyDuplicate(nums: number[], k: number): boolean {

    let map = {};

    for (let i = 0; i < (Math.min(nums.length, k + 1)); i++) {

        if (map[nums[i]]) {
            return true;
        }

        map[nums[i]] = true;

        console.log(map)
    }

    for (let i = 1; i < nums.length - k; i++) {
        let prevElement = nums[i - 1]
        let nextElement = nums[i + k];

        map[prevElement] = false;

        if (map[nextElement]) {
            return true;
        }

        map[nextElement] = true;
    }

    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15));