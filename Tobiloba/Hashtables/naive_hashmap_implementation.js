// Naive Hashmap implementation (Naive and Bad):
class NaiveHashMap {
    constructor (initialCapacity = 2) {
        this.buckets = new Array(initialCapacity);
    }


    set (key, value) {
        const index =  this.getIndex(key);
        this.buckets[index] = value;
    }


    get(key) {
        const index = this.getIndex(key);
        return this.buckets[index];
    }


    // The hash function is bad in that it doesn't handle the indexing at all! 
    // Causing Collisions
    hash(key) {
        return key.toString().length
    }

    getIndex(key) {
        const indexHash = this.hash(key);
        const index =  indexHash % this.buckets.length;
        return index;
    }
}


//Usage:
const assert = require('assert');
const hashMap = new NaiveHashMap();

hashMap.set("cat", 2);
hashMap.set("rat", 7);
hashMap.set("dog", 1);
hashMap.set("art", 8);

console.log(hashMap.buckets)




assert.equal(hashMap.get("art"), 8); // this one is ok
assert.equal(hashMap.get("cat"), 8) // got overwritten by art
assert.equal(hashMap.get("rat"), 8) // got overwritten by art
assert.equal(hashMap.get("dog"), 8) // got overwritten by art




/*

What is wrong with `NaiveHashMap` is that...


1) Hash function generates many duplicates. E.g.

hash('cat') // 3
hash('dog') // 3

This hash implementation will cause a lot of collisions.



2) Collisions are not handled at all. 
Both cat and dog will overwrite each other on position 3 of the Array (bucket#1).



3) Size of the Array even if we get a better hash function, we will get duplicates because the Array has a size of 3, 
which less than the number of elements that we want to fit. 
We want to have an initial capacity that is well beyond what we need to fit.

*/