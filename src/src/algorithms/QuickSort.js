export function getQuickSortAnimations(array) { 
    let animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length-1);
    return animations;
}

function quickSort(array, startIndex, lastIndex) {
    let newarr;
    if (startIndex > lastIndex) {
        return 1;
    }
    else {
        let leng = array.length-1;
        let index = array[leng];
        let newarr = new Array(leng).fill(0);
        console.log(newarr);
        let mid = Math.floor(newarr.length / 2);
        for (let i = 0; i < newarr.length; i++) {
            newarr[mid] = index;
            if (array[i] < index) {
                newarr[i] = array[i]
            } else if (array[i] > index) {
                newarr[mid] = array[i]
                mid += 1
            }
        }
        console.log("Quick results: ", newarr, newarr.length-1, index)
        quickSort(newarr, 0, Math.floor(newarr.length/2)-1)
        quickSort(newarr, Math.floor(newarr.length/2)+1,newarr.length-1)
    }
    // return newarr
}


//QuickSort receives an array, start index, and end index. Returns an index?