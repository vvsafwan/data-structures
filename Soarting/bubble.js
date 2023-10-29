function bubble(arr){
    let swapped;
    do{
        swapped = false;
        for(let i=0;i<arr.length;i++){
            if(arr[i+1]<arr[i]){
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp;
                swapped = true
            }
        }
    }while(swapped)
}

let arr = [4,3,2,6,7,5,1,9,8]
bubble(arr);
console.log(arr);