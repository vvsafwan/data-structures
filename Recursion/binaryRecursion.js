function binaryRecursion(arr,tar){
    return search(arr,tar,0,arr.length-1);
}

function search(arr,tar,left,right){
    if(left>right){
        return -1;
    }
    let middle = Math.floor((left+right)/2)
    if(tar==arr[middle]){
        return middle;
    }
    if(tar>arr[middle]){
        return search(arr,tar,middle+1,right);
    }else{
        return search(arr,tar,left,middle-1)
    }
}

console.log(binaryRecursion([1,2,3,4,5,6,7,8,9],6))