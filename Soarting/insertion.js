function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let inserttobe = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>inserttobe){
            arr[j+1] = arr[j];
            j = j-1
        }
        arr[j+1] = inserttobe;
    }
}

let arr = [4,3,2,6,7,5,1,9,8];
insertion(arr);
console.log(arr);