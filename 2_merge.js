//const prompt = require("prompt-sync")();

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}
console.log("Sorted Array: ");
function merge(leftArr, rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}



const arr = [9, 11, 10, 6, 8];
console.log(mergeSort(arr));







// console.log("Enter the elements of array:");
// for(let i=0; i<5; i++){
//  const val= prompt();
//  arr[i] = val;
// }


// we make a function mergeSort
//  now we divide the array till its length 1 