class Graph{
    constructor(){
        this.adjescencyList = {}
    }

    addVertex(vertex){
        if(!this.adjescencyList[vertex]){
            this.adjescencyList[vertex] = new Set();
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjescencyList[vertex]){
            this.addVertex(vertex1)
        }
        if(!this.adjescencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjescencyList[vertex1].add(vertex2);
        this.adjescencyList[vertex2].add(vertex1)
    }

    removeEdge(vertex1,vertex2){
        this.adjescencyList[vertex1].delete(vertex2);
        this.adjescencyList[vertex2].delete(vertex1);
    }

    removeVertex(vertex){
        if(!this.adjescencyList[vertex]){
            return
        }
        for(let adVertex of this.adjescencyList[vertex]){
            this.removeEdge(vertex,adVertex)
        }
        delete this.adjescencyList[vertex]
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjescencyList[vertex1].has(vertex2)&&this.adjescencyList[vertex2].has(vertex1)
        )
    }

    dfs(startvertex){
        const visited = new Set();
        const dfsHelper = (vertex) => {
            if(!vertex) return;
            visited.add(vertex);
            console.log(vertex);

            for(let neighbour of this.adjescencyList[vertex]){
                if(!visited.has(neighbour)){
                    dfsHelper(neighbour);
                }
            }
        }
        dfsHelper(startvertex)
    }

    bfs(startvertex){
        let queue = [startvertex];
        let visited = new Set();
        visited.add(startvertex);

        while(queue.length){
            let number = queue.shift();
            console.log(number);
            for(let neighbour of this.adjescencyList[number]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour);
                    visited.add(neighbour)
                }
            }
        }
    }
}