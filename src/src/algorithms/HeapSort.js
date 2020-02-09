export function getHeapSortAnimations(array) {
    let animations = [];
    if (array.length <= 1) return array;
    heapSort(array, 0, array.length-1, animations);
    return animations;
}

// https://www.geeksforgeeks.org/heap-sort/

function heapSort(array, animations) {

}