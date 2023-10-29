class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root==null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node;
        }else{
            this.insertnode(this.root,node);
        }
    }

    insertnode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left = node
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right = node;
            }else{
                this.insertnode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false;
        }
        if(root.value == value){
            return true;
        }else if(root.value>value){
            return this.search(root.left,value);
        }else{
            return this.search(root.right,value)
        }
    }

    levelorder(){
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            let number = queue.shift();
            console.log(number.value);
            if(number.left){
                queue.push(number.left);
            }
            if(number.right){
                queue.push(number.right);
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }else{
            return this.min(root.left);
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }else{
            return this.max(root.right);
        }
    }
}

const bst = new BinarySearchTree();

// console.log(bst.isEmpty());
bst.insert(10)
bst.insert(12)
bst.insert(9)
bst.insert(11)
bst.insert(15)
bst.insert(4)
bst.insert(13)
console.log(bst.search(bst.root,30));
bst.levelorder();