import { Hashmap } from "./hashmap.js"

let visitedNodes = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]
let queue = []
let path = {}

function knightsTravails(startPos, endPos){
    queue.push(startPos)

    do{
        let node = queue.shift()
        if(visitedNodes[node[0]][node[1]] == 1) continue
        if (node[0] == endPos[0] && node[1] == endPos[1]){
            console.log("Found shortest path")
            findShortestPath(startPos, node, [node.toString()])
            break
        }
        knightMoves(node)
    }while (queue.length > 0)
}

function knightMoves(node){
    let x = node[0]
    let y = node[1]

    if(path[node] == undefined){
        path[node] = []
    }

    if(visitedNodes[x][y] == 1){
        return
    }else visitedNodes[x][y] = 1

    if(x + 2 <= 7 && y + 1 <= 7){
        queue.push([x+2,y+1])
        path[node].push([x+2,y+1].toString())
    }
    if(x + 2 <= 7 && y - 1 >= 0){
        queue.push([x+2,y-1])
        path[node].push([x+2,y-1].toString())
    }
    if(x - 2 >= 0 && y + 1 <= 7){
        queue.push([x-2,y+1])
        path[node].push([x-2,y+1].toString())
    }
    if(x - 2 >= 0 && y - 1 >= 0){
        queue.push([x-2,y-1])
        path[node].push([x-2,y-1].toString())
    }

    if(x + 1 <= 7 && y + 2 <= 7){
        queue.push([x+1,y+2])
        path[node].push([x+1,y+2].toString())
    }
    if(x + 1 <= 7 && y - 2 >= 0){
        queue.push([x+1,y-2])
        path[node].push([x+1,y-2].toString())
    }
    if(x - 1 >= 0 && y + 2 <= 7){
        queue.push([x-1,y+2])
        path[node].push([x-1,y+2].toString())
    }
    if(x - 1 >= 0 && y - 2 >= 0){
        queue.push([x-1,y-2])
        path[node].push([x-1,y-2].toString())
    }

}

function findShortestPath(startPos, node, result = [node]){ 

    if (startPos.toString() == node){
        console.log(result.length)
        for(let i = result.length-1; i>= 0; i--){
            console.log(result[i])
        }
        return
    }

    for(const key in path){
        for(const item in path[key]){
            if (path[key][item] == node){
                result.push(key)
                return findShortestPath(startPos, key, result)
            }
        }
    }
}

knightsTravails([0,0],[7,7])