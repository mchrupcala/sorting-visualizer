export const mergesort = (array) => {
    let left = array.slice(0, Math.ceil(array.length / 2));
    let right = array.slice(Math.ceil(array.length / 2), array.length+1);
    
    //base case is needed to finishing the recursive looping
    if (array.length < 2) {
        return array;
    }
    //else statement will recursively call MergeSort until we reach the base case.
    left = mergesort(left);
    right = mergesort(right);
    
        // console.log(array);
    return merge(left, right);
    
}

const merge = (left, right) => {
    let chars = left.length+right.length;
    // console.log(chars, left, right);
    let newarr = [];
    let j = 0;
    let k = 0;
    for (let i = 0; i < chars; i++) {
        if (j >= left.length) {
            newarr[i] = right[k];
            k += 1;
        } else if (k >= right.length) {
            newarr[i] = left[j];
            j += 1;
        } else if (left[j] <= right[k]) {
            newarr[i] = left[j];
            j += 1;
        } else {
            newarr[i] = right[k];
            k += 1;
        }

    }
    return newarr;
}