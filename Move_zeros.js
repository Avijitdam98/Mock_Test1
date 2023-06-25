function moveZeroes(nums) {
  // Initialize two pointers:
  // - `i` willn point to the first non-zero element in the array.
  // - `j` will point to the current element in the array.
  let i = 0, j = 0;

  while (j < nums.length) {
    // If the current element is not zero, swap it with the element at i.
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      nums[j] = 0;
      i++;
    }
    j++;
  }
}
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // [1, 3, 12, 0, 0]
