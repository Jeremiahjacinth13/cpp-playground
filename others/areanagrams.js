/**
 * This solution uses multiple loops and hashmaps to know if two strings
 * are anagrams.
 * 
 * Mapping through the letters of each string and storing the number of times
 * each character occurs in each string, and then checking the values of both
 * hashmaps. 
 * 
 * If the values are the same, we can say that they are anagrams.
 * 
 * This solution has a time complexity of O(n) and a space complexity of O(n)
 */

function areAnagrams(string1, string2) {

    if (string1.length !== string2.length) return false;

    const map1 = {}
    const map2 = {}

    // populate the maps with the appropriate values
    for (let i = 0; i < string1.length; i++) {
        if (map1[string1[i]]) {
            map1[string1[i]]++;
        } else {
            map1[string1[i]] = 1;
        }

        if (map2[string2[i]]) {
            map2[string2[i]]++
        } else {
            map2[string2[i]] = 1;
        }
    }

    let matchCount = 0;

    for (let key of Object.keys(map1)) {
         if (map1[key] === map2[key]) {
            matchCount++;
        }
    }

    if (matchCount === Object.keys(map1).length) {
        return true;
    } else { 
        return false;
    }
}
console.log(Date.now())
console.log(areAnagrams('dangerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'ganderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')) // the runtime of this is O(a + b), where a and b is the length of strings 1 and 2 respectively
console.log(Date.now())


/**
 * The code below finds out if two strings are anagrams by sorting both string
 * and then comparing the sorted string
 * 
 * If the sorted strings are the same, then we can be sure that they are anagrams.
 * 
 * The time complexity of this algorithm is O(nlogn) as it takes nlogn time to sort
 * a string of length n.
 * 
 * The space complexity of this algorithm is O(n) which stores the values of the sorted arrays.
 */

function areAnagramsNLogN (string1, string2) {
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');

    return string1 === string2;
} 

console.log(Date.now())
console.log(areAnagramsNLogN('dangerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr', 'ganderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'))
console.log(Date.now())