/**
 * 
 * @param {number []} arr 
 * @returns number []
 */
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