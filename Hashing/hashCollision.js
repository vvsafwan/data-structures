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
        return total%this.size;
    }

    set(key,value){
        let index = this.hash(key);
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]];
        }else{
            let sameKey = bucket.find(item=>item[0]==key);
            if(sameKey){
                sameKey[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            let sameKey = bucket.find(item=>item[0]==key);
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            let sameKey = bucket.find(item=>item[0]==key);
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey,1))
            }
        }
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}