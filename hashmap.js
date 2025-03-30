import { createLinkedList } from "./linkedlist.js"

export class Hashmap{
    constructor(){
        this.loadFactor = 0.8
        this.capacity = 16
        this.buckets = []
        this.itemCount = 0
        this.genBuckets()
       }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.capacity
        }
     
        return hashCode;
    } 

    genBuckets(){
        let newbuckets = []
        for(let i=0; i<(this.capacity - this.buckets.length); i++){
            newbuckets.push(null)
        }
        this.buckets = newbuckets.concat(this.buckets);
    }

    set(key, value){
        key = key.toString()
        let index = this.hash(key)
        value = value.toString()
        if(this.buckets[index] == null){
            this.buckets[index] = createLinkedList(value)
        }else {
            this.buckets[index].append(value)
        }
        this.itemCount = this.itemCount + 1
        if (this.itemCount > this.loadFactor * this.capacity){
            this.increaseBucketSize()
        }
        // console.log(this.buckets[index].toString())
    }

    get(key){
        key = key.toString()
        
        let index = this.hash(key)
        try {
            let indexOfItem = this.buckets[index]
            console.log("trying to find", key, "it is found in ", indexOfItem)
            return indexOfItem.at(indexOfItem.find(key))[key]
        } catch (error) {
            return null
        }
    }

    has(key){
        return Boolean(get(key))
    }

    remove(key){
        let index = this.hash(key)
        try {
            let indexOfItem = this.buckets[index]
            indexOfItem.removeAt(indexOfItem.find(key))
            return true
        } catch (error) {
            return false
        }
    }
    length(){
        return this.entries
    }

    keys(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucket.keytoString()
            }
        }
        return result
    }

    values(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucket.valuetoString()
            }
        }
        return result
    }

    entries(){
        let result = ''
        for (let bucketindex in this.buckets){
            let bucket = this.buckets[bucketindex]
            if(bucket != null){
                result = result + bucketindex + bucket.toString()
            }
        }
        return result
    }
     
    increaseBucketSize(){
        this.capacity = this.capacity + 16
        this.genBuckets()
    }
}
