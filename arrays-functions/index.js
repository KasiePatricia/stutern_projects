// Arrays & Functions

// 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

/*
    Arrays are objects that provide a set of built-in methods for performing operations on them. These array methods can be divided into two categories: mutating methods and non-mutating methods.

    Mutating methods are those that modify the original array in place, whereas 
    non-mutating methods return a new array or a new value without modifying the original array.

    Five array methods that fall under each category:

    Mutating array methods:

    1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
    2. pop(): Removes the last element from an array and returns that element.
    3. sort(): Sorts the elements of an array in place and returns the sorted array.
    4. shift(): Removes the first element from an array and returns that element.
    5. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new      elements in place.

    Non-mutating array methods:

    1. reduce(): Applies a function to each element of an array and reduces the array to a single value. The original array remains unchanged.
    2. filter(): Returns a new array containing all elements that pass a given test function.
    3. map(): Returns a new array with the results of calling a provided function on every element in the original array.
    4. slice(): Returns a new array that is a copy of a portion of the original array, based on the start and end indices provided.
    5. concat(): Returns a new array that is a combination of two or more arrays or values.
*/

//==================================

/* 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
    Add ‘Kotlin’ to the end of the array
    Add ‘Java’ after ‘Ruby’
    Remove the first item in the array
    Add ’Scala’ and ‘Swift’ to the beginning of the array
    Replace ‘PHP’ with ‘Go’ and ‘Rust’
*/

const languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// Add ‘Kotlin’ to the end of the array
languages.push("Kotlin");
console.log(languages);

// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, "Java");
console.log(languages);

// Remove the first item in the array
languages.shift();
console.log(languages);

//Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);

//Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, "Go", "Rust");
console.log(languages);

//==============================

// 3.
/*
    What will be the value of fruit after calling the function changeFruit?
    let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
*/

let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}

changeFruit(fruit);
// It will replace "banana" with "orange" in the fruit array when passed as an argument.
// The resulting array is as follows:
["apple", "mango", "orange"];

//=========================

// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

let nums = [4, 5, 10, -2];
const maxValue = function (arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return `The maximum value is ${max}.`;
};

maxValue(nums); //The maximum value is 10.

//=======================

/* 5.
    Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
    e.g.,
    valTimesIndex([1,2,3]) // [0,2,6]
	valTimesIndex([5,10,15]) // [0,10,30]
*/

const valTimesIndex = function (arr) {
  return arr.map((value, index) => value * index);
};

valTimesIndex([1, 2, 3]); // [0,2,6]
valTimesIndex([5, 10, 15]); // [0,10,30]
