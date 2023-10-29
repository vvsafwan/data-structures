function mergesort(arr){
    if(arr.length<2){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
    const sort = [];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sort.push(left.shift())
        }else{
            sort.push(right.shift())
        }
    }
    return [...sort,...left,...right];
}

let arr = [5,7,9,8,6,2,3,1,4];
console.log(mergesort(arr));