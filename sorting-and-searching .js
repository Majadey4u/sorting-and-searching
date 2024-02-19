function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
      let current = arr[i]; // put the elements you want to insert here
      let j = i - 1; // we start from the previous element
      
      // we Move elements of arr[0..i-1], that are greater than current,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j]; // Move up the element one position ahead
          j--; // Move to the previous element
      }
      
      arr[j + 1] = current; // Insert the current element into the sorted sequence
  }
  
  return arr;
}

// In usage:
let arr = [4, 6, 13, 14, 15];
console.log("Original Array:", arr);
console.log("Sorted Array:", insertionSort(arr));