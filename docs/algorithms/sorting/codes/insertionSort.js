/**
 * 
 * @param {number []} arr 
 * @param {number} n 
 * @returns void
 */

const insertionSort = (arr, n) => {
  if (n < 1) return;
  for (let i = 1; i < n; i++) {
    let j = i - 1;
    const key = arr[i];
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}