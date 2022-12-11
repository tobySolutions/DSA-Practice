/*
Let’s make the following improvements to our HashMap implementation:

Hash function that checks "types" and "character orders" to minimize collisions.

Handle collisions by appending values to a list. We also added a counter to keep track of them.

*/


class DecentHashMap {

    constructor(initialCapacity = 2) {
        this.buckets = new Array(initialCapacity);
        this.collisions = 0;
    }

    set(key, value) {
        const bucketIndex = this.getIndex(key);
        
        // keep track and handle collision
        if (this.buckets[bucketIndex]) {
            this.buckets[bucketIndex].push({key, value});
            if (this.buckets[bucketIndex].length > 1) {this.collisions++;}
        } else {
            this.buckets[bucketIndex] = [{key, value}];
        }

        return this;
    }


    get(key) {
        const bucketIndex = this.getIndex(key);
        for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
            const entry = this.buckets[bucketIndex][arrayIndex];

            if(entry.key === key) {
                return entry.value;
            }
        }
    }

    hash(key) {
        let hashValue = 0;
        let stringTypeKey = `${key}${typeof key}`;


        for (let index = 0; index < stringTypeKey.length; index++) {
            const charCode = stringTypeKey.charCodeAt(index);
            hashValue += charCode << (index * 8);
        }
        return hashValue;
    }

    getIndex(key) {
        const indexHash = this.hash(key);
        const index = indexHash % this.buckets.length;
        return index;
    }
}

// Usage
/* 

Having a bigger bucket size is excellent to avoid collisions, 
but it consumes too much "memory", 
and probably most of the buckets will be unused. 

*/
const assert = require("assert");
const hashMap = new DecentHashMap();


hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("dog", 1);
hashMap.set("art", 8);

console.log("collisions: ", hashMap.collisions); //2
console.log(hashMap.buckets);


assert.equal(hashMap.get("art"), 8); // this one is ok
assert.equal(hashMap.get("cat"), 2); // Good. Didn't get overwritten by art
assert.equal(hashMap.get("rat"), 7); // Good. Didn't get overwritten by art
assert.equal(hashMap.get("dog"), 1); // Good. Didn't get overwritten by art