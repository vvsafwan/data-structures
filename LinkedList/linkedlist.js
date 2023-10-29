class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isempty(){
        return this.size === 0;
    }

    getsize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isempty()){
            this.head = node;
            this.size++;
        }else{
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }

    append(value){
        const node = new Node(value);
        if(this.isempty()){
            this.head = node;
            this.size++;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    display(){
        let list = '';
        let current = this.head;
        if(this.isempty()){
            return console.log("List is empty");
        }
        for(let i=0;i<this.size;i++){
            list+= `${current.value} `;
            current = current.next;
        }
        console.log(list);
    }

    insert(value,index){
        if(index===0){
            this.prepend(value)
        }else{
            const node = new Node(value);
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++
        }
    }

    removeIndex(index){
        if(index==0){
            this.head = this.head.next;
            this.size--;
        }else{
            let current = this.head;
            for(let i=0;i<index-1;i++){
                current = current.next;
            }
            let removenode = current.next;
            current.next = removenode.next;
            this.size--;
        }
    }

    removevalue(value){
        if(this.head.value==value){
            this.head = this.head.next;
            this.size--;
        }else{
            let current = this.head;
            while(current.next && current.next.value != value){
                current = current.next;
            }
            let removenode = current.next;
            current.next = removenode.next;
            this.size--
        }
    }

    search(value){
        let current = this.head;
        for(let i=0;i<this.size;i++){
            if(current.value == value){
                return console.log("Your value is in index number : ",i);
            }
            current = current.next;
        }
        return console.log("No values are present here");
    }

    reverse(){
        let current = this.head;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        this.head = prev
    }
}

const list = new LinkedList();
list.append(10)
list.append(20)
list.append(30)
console.log(list.isempty());
console.log(list.getsize());
list.insert(25,2);
list.insert(35,4);
list.insert(32,4);
// list.removeIndex(3)
// list.removeIndex(0);
// list.removevalue(25)
// list.removevalue(20);
list.search(25);
list.reverse();
list.display();
