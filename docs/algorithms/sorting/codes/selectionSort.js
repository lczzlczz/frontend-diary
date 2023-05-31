/**
 * 
 * @param {number []} arr 
 * @param {number} n 
 * @returns void
 */

const selectionSort = (arr, n) => {
  if (n < 1) return;
  for (let i = 0; i < n - 1; i++) {
    const minKey = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[minKey] > arr[j]) {
        minKey = j;
      }
    }
    if (minKey !== i) {
      [arr[i], arr[minKey]] = [arr[minKey], arr[i]];
    }
  }
}