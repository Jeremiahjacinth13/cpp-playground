function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        console.log(array)
    }
}

const array = [5, 4, 3, 2, 1, 7, 8, 9, 10, 42, 32, 54, 41, 13, 56, 57, 49, 30, 32, 545, 343, 466, 411, 14]
console.time('selectionSort')
selectionSort(array);
console.timeEnd('selectionSort')
console.log(array);