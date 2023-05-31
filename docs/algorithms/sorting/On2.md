---
id: alg-sorting-on2
slug: /algorithms/sorting/on2
title: O(n^2) Sorting Algorithms
sidebar_label: O(n^2)
---

# O(n^2) Sorting Algorithms

## Introduction

- Bubble sort: comparing adjacent elements and swapping them if they are not in the right order
- Insertion sort: playing cards
- Selection sort: finding the smallest element and putting it in the first position

## Comparison

| Algorithm      | Best   | Average | Worst  | Space | Stable ? | In-Place ? |
| -------------- | ------ | ------- | ------ | ----- | -------- | ---------- |
| Bubble Sort    | O(n)   | O(n^2)  | O(n^2) | O(1)  | Yes      | Yes        |
| Insertion Sort | O(n)   | O(n^2)  | O(n^2) | O(1)  | Yes      | Yes        |
| Selection Sort | O(n^2) | O(n^2)  | O(n^2) | O(1)  | No       | Yes        |

## Implementation

### Bubble Sort

Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

![Bubble Sort](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

```js title="Bubble Sort" showLineNumbers
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
```

### Insertion sort 

Insertion Sort is a simple sorting algorithm that iterates through an array and at each iteration it removes one element from the array, finds the location it belongs to in the sorted list and inserts it there, repeating until no elements remain in the unsorted list. It is an in-place, stable sorting algorithm that is inefficient on large input arrays but works well for data sets that are almost sorted. It is more efficient in practice compared to other quadratic sorting algorithms like bubble sort and selection sort.

![Insertion Sort](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

```js title="Insertion Sort" showLineNumbers
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
```

### Selection sort

Selection sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

![Selection Sort](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)

```js title="Selection Sort" showLineNumbers
/**
 * 
 * @param {number []} arr 
 * @param {number} n 
 * @returns void
 */

const selectionSort = (arr, n) => {
  if (n < 1) return;
  for (let i = 0; i < n - 1; i++) {
    let minKey = i;
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
```

