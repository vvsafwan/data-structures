function binarysearch(arr,tar){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let middle = Math.floor((left+right)/2);
        if(arr[middle]==tar){
            return middle;
        }else if(arr[middle]<tar){
            left = middle + 1;
        }else{
            right = middle -1
        }
    }
    return -1
}

console.log(binarysearch([1,2,3,4,5,6,7],-5));