export function getQuickSortAnimations(array) { 
    let animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length-1);
    return array;
}

function partition(array,low, high) {
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
            }
        }
        let temp = array[high];
        array[high] = array[i+1];
        array[i+1] = temp
        return (i + 1)
}

function quickSort(array, startIndex, lastIndex) {

    if (startIndex < lastIndex) {
        let pindex = partition(array, startIndex, lastIndex)
        console.log(array);
        quickSort(array, startIndex, pindex-1)
        quickSort(array, pindex+1,lastIndex)
    }
    return array
}






//First version of partition code:

// if (startIndex < lastIndex) {
//     let leng = array.length-1;
//     let index = array[leng];
//     let newarr = new Array(leng).fill(0);
//     let mid = Math.floor(newarr.length / 2);

//     for (let i = 0; i < newarr.length; i++) {
//         newarr[mid] = index;
//         if (array[i] < index) {
//             newarr[i] = array[i]
//         } else if (array[i] > index) {
//             newarr[mid] = array[i]
//             mid += 1
//         }
//     }