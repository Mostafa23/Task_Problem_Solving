// // // Exercise 1: Filtering an Array (Even Numbers)
// Problem: Write a function that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// // OTHER =>

function filterEvenNumbers(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 


// // // Exercise 2: Find the Largest Number
// Problem: Write a function that takes an array of numbers and returns the largest number in the array.

function findLargestNumber(arr) {
    return Math.max(...arr);
}

console.log(findLargestNumber([3, 5, 7, 2, 9])); 

// // OTHER =>

function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargestNumber([3, 5, 7, 2, 9])); 


// // // Exercise 3: Reverse a String
// Problem: Write a function that takes a string as input and returns the same string but reversed.

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

// // OTHER =>

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("hello")); 


// // // Exercise 4: Remove Duplicates
// Problem: Write a function that takes an array of numbers and returns a new array without duplicate numbers.

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// // OTHER =>

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniqueArr.length; j++) {
            if (arr[i] === uniqueArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
