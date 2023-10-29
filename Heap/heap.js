class Heap{
    constructor(){
        this.heap = [];
    }

    minheap(array){
        this.buildheap(array);
    }

    buildheap(array){
        this.heap = array;
        for(let i=this.parent(this.heap.length-1);i>=0;i--){
            this.shiftdown(i);
        }
    }

    shiftdown(current){
        let end = this.heap.length-1;
        let left = this.left(current)
        while(left<=end){
            let right = this.right(current)
            let shifttobe;
            if(right<=end&&this.heap[right]<this.heap[left]){
                shifttobe = right;
            }else{
                shifttobe = left
            }
            if(this.heap[current]>this.heap[shifttobe]){
                [this.heap[current],this.heap[shifttobe]] = [this.heap[shifttobe],this.heap[current]];
                current = shifttobe;
                left = this.left(current);
            }else{
                return
            }
        }
    }

    insert(value){
        this.heap.push(value);
        this.shiftup(this.heap.length-1);
    }

    shiftup(current){
        let parent = this.parent(current)
        while(this.heap[parent]>this.heap[current]){
            [this.heap[parent],this.heap[current]] = [this.heap[current],this.heap[parent]]
            current = parent;
            parent = this.parent(current);
        }
    }

    remove(){
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1],this.heap[0]];
        let number = this.heap.pop();
        this.shiftdown(0);
        return number
    }

    peek(){
        return this.heap[0];
    }

    parent(){
        return Math.floor((i-1)/2);
    }

    left(){
        return (i*2)+1;
    }

    right(){
        return (i*2)+2;
    }
}