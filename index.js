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
            findShortestPath(node)
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
        path[node].push([x+2,y+1])
    }
    if(x + 2 <= 7 && y - 1 >= 0){
        queue.push([x+2,y-1])
        path[node].push([x+2,y-1])
    }
    if(x - 2 >= 0 && y + 1 <= 7){
        queue.push([x-2,y+1])
        path[node].push([x-2,y+1])
    }
    if(x - 2 >= 0 && y - 1 >= 0){
        queue.push([x-2,y-1])
        path[node].push([x-2,y-1])
    }

    if(x + 1 <= 7 && y + 2 <= 7){
        queue.push([x+1,y+2])
        path[node].push([x+1,y+2])
    }
    if(x + 1 <= 7 && y - 2 >= 0){
        queue.push([x+1,y-2])
        path[node].push([x+1,y-2])
    }
    if(x - 1 >= 0 && y + 2 <= 7){
        queue.push([x-1,y+2])
        path[node].push([x-1,y+2])
    }
    if(x - 1 >= 0 && y - 2 >= 0){
        queue.push([x-1,y-2])
        path[node].push([x-1,y-2])
    }

}

function findShortestPath(node){ 
    console.log(path)
}

knightsTravails([0,0],[3,3])
// console.log(path)