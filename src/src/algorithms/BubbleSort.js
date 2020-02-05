export function getBubbleSortAnimations(array) {
    let animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, animations)
    console.log(array);
    return animations;
}

function swap(array, left_int, right_int) {
    let temp = array[left_int];
    array[left_int] = array[right_int];
    array[right_int] = temp;
}

function bubbleSort(
    array,
    animations
) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1; j++) {
            if (array[j] > array[j+1]) {
                animations.push([j, j+1]);
                animations.push([j, j+1]);
                animations.push([j, j+1]);
                swap(array, j, j+1);
            }
        }
    }
    return array;
}


//TL;DR...I can write my sort algo's however I want/need to. just make sure that each step of the sort, I'm passing in & pushing to ANIMATIONS 3x.


