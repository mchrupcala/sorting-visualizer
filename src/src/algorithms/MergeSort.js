export const mergesort = (array) => {
    console.log("Array starts like this: ", array)
    let left = array.slice(0, Math.ceil(array.length / 2));
    let right = array.slice(Math.ceil(array.length / 2), array.length+1);
    console.log("left is: ", left, "Right is: ", right);
    
    //base case is needed to finishing the recursive looping
    // if () {

    // }
    //else statement will recursively call MergeSort until we reach the base case.
    return "ok";
}

