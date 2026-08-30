// sort -> sort the original array
// ------
let arr = [20, 1, 32, 53, 11];
// arr.sort((a, b) => a - b); // ascending (default)
arr.sort((a, b) => b - a); // descending
console.log(arr)

// toSorted -> sort and return the sorted array. Doesn't change the original array
// ----------
let arr2 = [20, 1, 32, 53, 11];
let newArr = arr.toSorted((a, b) => b - a);
console.log(arr2); // doesn't changed
console.log(newArr);

// reverse -> sort the original array
// --------
let arr3 = ["mango", "jackfruit", "berry", "apple", "orange"];
arr3.reverse()
console.log(arr3)

// toReversed -> sort and return the sorted array. Doesn't change the original array
let arr4 = ["mango", "jackfruit", "berry", "apple", "orange"];
let anotherArr = arr4.toReversed();
console.log(arr4); // doesn't changed
console.log(anotherArr);