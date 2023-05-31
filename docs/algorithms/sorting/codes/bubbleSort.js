/**
 * 
 * @param {number []} arr 
 * @param {number} n 
 * @returns void
 */

const bubbleSort = (arr, n) => {
  if (n < 1) return;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 1; j < n - i; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        swapped = true
      }
    }
    if (!swapped) break;
  }
}
