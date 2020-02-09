export function getQuickSortAnimations(array) { 
    let animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length-1, animations);
    return animations;
}


// https://www.geeksforgeeks.org/quick-sort/

function partition(array, low, high, animations) {
    // console.log("Animations: ", animations)
    // pivot (Element to be placed at right position)
    let pivot = array[high];  

    let i = (low - 1)  // Index of smaller element

    for (let j = low; j <= high- 1; j++)
    {
        // If current element is smaller than the pivot
        if (array[j] < pivot)
        {
            i++;    // increment index of smaller element
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            if (i !== j) {
                animations.push([j, i]);
                animations.push([j, i]);
                animations.push([i, array[j], j, array[i]]);
                // animations.push([]);
            }
        }
    }
    animations.push([i+1, high]);
    animations.push([i+1, high]);
    let temp = array[high];
    animations.push([i+1, array[i+1], high, array[high]]);
    // animations.push([]);
    array[high] = array[i+1];
    array[i+1] = temp;

    return (i + 1)
}

function quickSort(array, startIndex, lastIndex, animations) {

if (startIndex < lastIndex) {
    let pindex = partition(array, startIndex, lastIndex, animations)
    // console.log(animations);
    quickSort(array, startIndex, pindex-1, animations)
    quickSort(array, pindex+1,lastIndex, animations)
}
return array
}



//My version...it's close, but still infinite looping...

// function partition(array, startIndex, lastIndex) {
//     let newarr = new Array(lastIndex).fill(0);
//     let mid = Math.floor(newarr.length / 2);

//     for (let i = 0; i < array.length; i++) {
//         newarr[mid] = lastIndex;
//         if (array[i] < lastIndex) {
//             newarr[i] = array[i]
//         } else if (array[i] > lastIndex) {
//             newarr[mid] = array[i]
//             mid += 1
//         }
//     }
//     array = newarr
//     return Math.floor(array.length / 2)
// }

// function quickSort(array, startIndex, lastIndex) {

//     if (startIndex < lastIndex) {
//         let pindex = partition(array, startIndex, lastIndex)
//         console.log(array);
//         quickSort(array, startIndex, pindex-1)
//         quickSort(array, pindex+1,lastIndex)
//     }
//     return array
// }