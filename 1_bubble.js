function bubbleSort(arr){
    let swapped
    do{
        swapped=false
for(let i=0; i<arr.length-1; i++){
    if(arr[i]>arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true  // if any swap happens then the value of swapped is set to true
     }    
    }
  }while(swapped) // after finishing the loop we check the value of swapped if the value of swapped is true then the loop is started again bcoz our elemnts are not sorted till now
}
const arr =[2, 4, 3, 6, 7]
bubbleSort(arr)
console.log(arr)

// do while loop runs jbtk ki swapped ki 
// To determine if an array is sorted or not we have to go through the elements atleast once
// and for this we use do-while loop
//if the elements are swapped  so while swapped is true keep running the for loop
// but how are we changing this swapped value  at the beginning of do while set Swapped  false and the within the 
// for loop if we are swapping the elements set swapped = true


// we check if any adjacent elements are out of order if they are not we exit the do - while loop since the array
// is already sorted
// if we did swap elements we go through the array again to make sure there is no more swqpping required if we encounter a swap repeat the process