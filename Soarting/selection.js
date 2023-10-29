function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let smallest = i
        for(let j=i+1;arr.length;j++){
            if(arr[j]<smallest){
                smallest = j;
            }
        }
        if(smallest!=i){
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;
        }
    }
}

let arr = [4,6,8,0,9,7,5,2,1,3];
selection(arr);
console.log(arr);