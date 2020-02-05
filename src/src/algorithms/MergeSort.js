export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;

    //find the index where I can split the array in half...
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    
    //recursively call function against the left half
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    
    //recursively call function against the right half
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    

    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }







// export const mergesort = (array) => {
//     let left = array.slice(0, Math.ceil(array.length / 2));
//     let right = array.slice(Math.ceil(array.length / 2), array.length+1);
    
//     //base case is needed to finishing the recursive looping
//     if (array.length < 2) {
//         return array;
//     }
//     //else statement will recursively call MergeSort until we reach the base case.
//     left = mergesort(left);
//     right = mergesort(right);
    
//         // console.log(array);
//     return merge(left, right);
    
// }

// const merge = (left, right) => {
//     let chars = left.length+right.length;
//     // console.log(chars, left, right);
//     let newarr = [];
//     let j = 0;
//     let k = 0;
//     for (let i = 0; i < chars; i++) {
//         if (j >= left.length) {
//             newarr[i] = right[k];
//             k += 1;
//         } else if (k >= right.length) {
//             newarr[i] = left[j];
//             j += 1;
//         } else if (left[j] <= right[k]) {
//             newarr[i] = left[j];
//             j += 1;
//         } else {
//             newarr[i] = right[k];
//             k += 1;
//         }

//     }
//     return newarr;
// }