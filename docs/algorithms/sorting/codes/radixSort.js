/**
 * Radix Sort Implementation
 * 
 * Radix sort is a non-comparative integer sorting algorithm that sorts data with
 * integer keys by grouping keys by the individual digits which share the same
 * significant position and value. A positional notation is required, but because
 * integers can represent strings of characters (e.g., names or dates) and
 * specially formatted floating point numbers, radix sort is not limited to
 * integers.
 * 
 * @see https://en.wikipedia.org/wiki/Radix_sort
 * 
 * @ Time Complexity of Solution:
 * Best Case O(nk); Average Case O(nk); Worst Case O(nk),
 * 
 * @ Space Complexity of Solution:
 * Worst Case O(n+k).
 * 
 * where n is the size of the input array and k means the values range from 0
 * to k.
 * 
 * Stability of Solution: Yes
 * In-Place of Solution: No
 * 
 * @param {number []} items the array of numbers to be sorted.
 * @return {number []} the sorted array in non-decreasing order.
 */

const radixSort = (items, RADIX) => {
  if (items.length <= 1) {
    return items;
  }
  
  if (RADIX === undefined) {
    RADIX = 10;
  }

  let maxLength = false;
  let placement = 1;

  while (!maxLength) {
    maxLength = true;
    let buckets = [];

    for (let i = 0; i < RADIX; i++) {
      buckets.push([]);
    }

    for (let i = 0; i < items.length; i++) {
      let tmp = items[i] / placement;
      buckets[Math.floor(tmp % RADIX)].push(items[i]);
      if (maxLength && tmp > 0) {
        maxLength = false;
      }
    }

    let idx = 0;
    for (let i = 0; i < RADIX; i++) {
      let bucket = buckets[i];
      for (let j = 0; j < bucket.length; j++) {
        items[idx++] = bucket[j];
      }
    }

    placement *= RADIX;
  }

  return items;
}