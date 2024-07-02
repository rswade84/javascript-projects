//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// Function that finds the min value in arr
function findMinValue(arr) {
  // Temp variable to begin array
  let min = arr[0];
  // Iterate through array from first element
  for (let i = 0; i < arr.length; i++) {
    // If current element is less than current min value
    if (arr[i] < min) {
      // Update the minimum value to the current element
      min = arr[i];
    }
  }

  // Return the minimum value found
  return min;
}

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

// Print the test array(s) to console.
console.log(findMinValue(nums1));
console.log(findMinValue(nums2));
console.log(findMinValue(nums3));
