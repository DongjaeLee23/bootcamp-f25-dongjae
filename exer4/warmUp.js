/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 *
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {
  // TODO
  if (numGrade < 0 || numGrade > 100) {
    return "INVALID"
  }
  if (numGrade >= 90) {
    return "A";
  } else if (numGrade >= 80) {
    return "B";
  } else if (numGrade >= 70) {
    return "C";
  } else if (numGrade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array. The
 * ordering of the remaining elements should be the same as the original array.
 *
 * Example: [9, 3, 4, 1, 2, 0] --> [4, 2, 0]
 */
function getEvenElements(array) {
  // TODO
  let even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      even.push(array[i])
    }
  }
  return even
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {
  // TODO
  let string_list = string.split(" ")
  let maxString = ""
  for (let i  = 0; i < string_list.length; i++) {
    if (string_list[i].length > maxString.length) {
      maxString = string_list[i]
    }
  }
  return maxString.length
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {
  // TODO
  // return Object.assign(object1, object2)
  let obj = {}
  for (let key1 in object1) {
    
    obj[key1] = object1[key1];
    
  }
  for (let key2 in object2) {
    
    obj[key2] = object2[key2];
    
  }
  return obj
}

/**
 *  Task 5: Create a function that takes an array as an argument and returns
 *  the reverse array.
 *
 *  DO NOT USE THE .reverse() METHOD!!
 *
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {
  // TODO
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;

    right -= 1;
    left += 1;
  }
  return array
}

// DO NOT EDIT BELOW THIS LINE -- the code is for testing purposes only!
// To test your code, run `node warmUp.js` in your terminal

import {
  testToLetterGrade,
  testGetEvenElements,
  testFindLongestWord,
  testCombineObjects,
  testReverseArr,
} from "./warmUpTests.js";

console.log("TEST RESULTS:");
testToLetterGrade(toLetterGrade);
testGetEvenElements(getEvenElements);
testFindLongestWord(findLongestWord);
testCombineObjects(combineObjects);
testReverseArr(reverseArr);
