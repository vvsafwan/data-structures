class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size
    }

    set(key,value){
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key,value){
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const hash = new HashTable(50);
hash.set("name","safwan");
hash.set("age",25);
hash.display();