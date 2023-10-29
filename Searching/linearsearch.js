function linearsearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i;
        }
    }
    return -1;
}
console.log(linearsearch([1,2,3,4,5,6,7,8],3));