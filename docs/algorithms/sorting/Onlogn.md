---
id: alg-sorting-onlogn
slug: /algorithms/sorting/onlogn
title: O(nlogn) Sorting Algorithms
sidebar_label: O(nlogn)
---

# O(nlogn) Sorting Algorithms

## Introduction

- Merge Sort is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
- Quick Sort is a divide and conquer algorithm that picks an element as pivot and partitions the given array around the picked pivot.

## Comparisons

| Algorithm  | Best     | Average  | Worst    | Space | Stable? | In-Place? |
| ---------- | -------- | -------- | -------- | ----- | ------- | --------- |
| Merge Sort | O(nlogn) | O(nlogn) | O(nlogn) | O(n)  | Yes     | No        |
| Quick Sort | O(nlogn) | O(nlogn) | O(n^2)   | O(1)  | No      | Yes       |

## Implementations

### Merge Sort

![Merge Sort](static/Merge-sort-example-300px.gif)

[Visual Sorting](https://visualgo.net/en/sorting)


```js
const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = arr.length >> 1;
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

const merge = (leftArr, rightArr) => {
  let mergedArr = [];
  let [l, r] = [0, 0];

  while (l < leftArr.length || r < rightArr.length) {
    if (l < leftArr.length && leftArr[l] < rightArr[r] || r >= rightArr.length) {
      mergedArr.push(leftArr[l++]);
    } else {
      mergedArr.push(rightArr[r++]);
    }
  }

  return mergedArr;
}

export default mergeSort;
```

### Quick Sort

![Quick Sort](static/Quicksort-example.gif)

[Visual Sorting](https://visualgo.net/en/sorting)  

```js
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
```

## Conclusion

- Merge Sort is a stable algorithm, but it requires O(n) extra space.
- Quick Sort is an in-place algorithm, but it is not stable.
- Merge Sort is preferred for linked lists, while Quick Sort is preferred for arrays.
- Merge Sort is preferred when stability is a concern, while Quick Sort is preferred when we need faster sorting.