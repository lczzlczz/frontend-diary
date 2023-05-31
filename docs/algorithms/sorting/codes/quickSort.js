const quickSort = (arr, n) => {
  quickSortC(arr, 0, n - 1);
}

const quickSortC = (arr, left, right) => {
  if (left >= right) return;

  const pivot = partition(arr, left, right);
  quickSortC(arr, left, pivot - 1);
  quickSortC(arr, pivot + 1, right);
}

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, i, right);

  return i;
}

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export default quickSort;