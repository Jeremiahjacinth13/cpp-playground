// // Leetcode problem 3
// // https://leetcode.com/problems/longest-substring-without-repeating-characters/

// function lengthOfLongestSubstring(s: string): number {

//     let maxLength = 0;
//     let startIndex = 0;
//     let endIndex = 0;

//     let map: Record<string, boolean> = {};

//     while (endIndex >= startIndex && endIndex < s.length) {
//         let startChar = s[startIndex];
//         let endChar = s[endIndex];

//         if (startIndex === endIndex) {
//             map[startChar] = true;
//         } else {
//             if (map[endChar]) {
//                 // map[startChar] = false;
//                 map = {}
//                 startIndex = endIndex;
//             }
//         }

//         let currLength = endIndex - startIndex + 1;
//         maxLength = Math.max(currLength, maxLength);

//         map[endChar] = true;
//         endIndex++;
//     }

//     return maxLength;
// };

function lengthOfLongestSubstring(s: string): number {

    let maxLength = 0;
    let map = {};

    if (s.length === 0) return 0;

    for (let left = 0, right = 0; right < s.length; right++) {
        if (map[s[right]]) {
            left++;
            map[s[right]] = false;
        } else {
            map[s[right]] = true;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
        
        console.log(map, maxLength)

    }

    return maxLength;
}



console.log(lengthOfLongestSubstring("acadddtyui")); // 5
// console.log(lengthOfLongestSubstring("abcabcbb")); // 3
