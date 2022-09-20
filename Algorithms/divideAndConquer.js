function sumArray (array) {
    const firstElement = array[0];

    if (array.length === 0) return 0;

    array.shift();

    return firstElement + sumArray(array);

}

