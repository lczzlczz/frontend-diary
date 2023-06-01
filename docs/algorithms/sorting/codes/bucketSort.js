/**
 * Bucket Sort Implementation
 * 
 * Bucket sort is a comparison sort algorithm that operates on elements by
 * dividing them into different buckets and then sorting these buckets
 * individually. Each bucket is sorted individually using a separate sorting
 * algorithm or by applying the bucket sort algorithm recursively. Bucket sort
 * is mainly useful when the input is uniformly distributed over a range.
 * 
 * @see https://en.wikipedia.org/wiki/Bucket_sort
 * 
 * @ Time Complexity of Solution:
 * Best Case O(n); Average Case O(n); Worst Case O(n).
 * 
 * Space Complexity of Solution:
 * Worst Case O(n).
 * 
 * Stability of Solution: Yes
 * In-Place of Solution: No
 * 
 * @param {number []} list the array of numbers to be sorted.
 * @param {number} size the size of the bucket, default is 5.
 * @return {number []} the sorted array in non-decreasing order.
 */
const bucketSort = (list, size) => {
  if (size === undefined) {
    size = 5;
  }
  if (list.length <= 1) {
    return list;
  }

  const min = Math.min(...list);
  const max = Math.max(...list);

  const bucketCount = Math.floor((max - min) / size) + 1;

  const buckets = new Array(bucketCount).fill().map(() => []);

  list.forEach(num => {
    const key = Math.floor((num - min) / size);
    buckets[key].push(num);
  })

  let sortedList = [];

  for (let i = 0; i < buckets.length; i++) {
    const sortedBucket = buckets[i].sort((a, b) => a - b);
    sortedList = sortedList.concat(sortedBucket);
  }

  return sortedList;
}

export default bucketSort;