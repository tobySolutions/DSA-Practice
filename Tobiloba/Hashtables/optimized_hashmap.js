/*
The load factor is the measurement of how full is a hash map. 
We can get the load factor by dividing the number of items by the bucket size.
*/


class HashMap {
    constructor (initialCapacity = 16, loadFactor = 0.75) {
        this.buckets = new Array(initialCapacity);
        this.loadFactor = loadFactor;
        this.size = 0;
        this.collisions = 0;
        this.keys = [];
    }

    hash (key) {
        let hashValue = 0;
        const stringTypeKey = `${key}${typeof key}`;

        for (let idx = 0; idx < stringTypeKey.length; idx++) {
            const charCode = stringTypeKey.charCodeAt(idx);

            hashValue += charCode << (idx * 8);
        }
        return hashValue;
    }


    _getBucketIndex(key) {
        const hashValue = this.hash(key);
        const bucketIndex = hashValue % this.buckets.length;
        return bucketIndex;
    }

    set(key, value) {
        const {bucketIndex, entryIndex} = this._getIndexes(key);

        if (entryIndex === undefined) {
            // initialize array and save key/value
            const keyIndex = this.keys.push({content: key}) - 1; // keep track of the index
            this.buckets[bucketIndex] = this.buckets[bucketIndex] || [];
            this.buckets[bucketIndex].push({key, value, keyIndex});
            this.size++;
            // Optional: keep count of collisions
            if (this.buckets[bucketIndex].length > 1) {this.collisions++;}
        } else {
            // override existing value
           this.buckets[bucketIndex][entryIndex].value = value;
        }

        // check if a rehash is due
        if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
            this.rehash(this.buckets.length * 2);
        }

        return this;
    }

    get(key) {
        const {bucketIndex, entryIndex} = this._getIndexes(key);

        if(entryIndex === undefined) {
            return;
        }

        return this.buckets[bucketIndex][entryIndex].value;
    }


    has(key) {
        // the double ! is just "not" two times
        return !! this.get(key);
    }

    _getIndexes(key) {
        const bucketIndex = this._getBucketIndex(key);
        const values = this.buckets[bucketIndex] || [];

        for (let entryIndex = 0; entryIndex < values.length; entryIndex++) {
            const entry = values[entryIndex];
            if(entry.key === key) {
                return {bucketIndex, entryIndex}
            }
        }

        return {bucketIndex};
    }

    delete(key) {
        const {bucketIndex, entryIndex, keyIndex} = this._getIndexes(key);

        if (entryIndex === undefined) {
            return false;
        }

        this.buckets[bucketIndex].splice(entryIndex, 1);
        delete this.keys[keyIndex];
        this.size--;

        return true;
    }

    // create a new HahsMap with doubled capacity
    rehash(newCapacity) {
        const newMap = new HashMap(newCapacity);

        this.keys.forEach(key => {
            if(key) {
                newMap.set(key.content, this.get(key.content))
            }
        });

        //update bucket 
        this.buckets = newMap.buckets;
        this.collisions = newMap.collisions;
        // Optional: both 'keys' has the same content except that the new one doesn't have empty spaces from deletions
        this.keys = newMap.keys;
    }

    getLoadFactor() {
        return this.size / this.buckets.length;
    }
}


const assert = require('assert');
const hashMap = new HashMap();

assert.equal(hashMap.getLoadFactor(), 0);
hashMap.set('songs', 2);
hashMap.set('pets', 7);
hashMap.set('tests', 1);
hashMap.set('art', 8);
assert.equal(hashMap.getLoadFactor(), 4/16);

hashMap.set('Pineapple', 'Pen Pineapple Apple Pen');
hashMap.set('Despacito', 'Luis Fonsi');
hashMap.set('Bailando', 'Enrique Iglesias');
hashMap.set('Dura', 'Daddy Yankee');

hashMap.set('Lean On', 'Major Lazer');
hashMap.set('Hello', 'Adele');
hashMap.set('All About That Bass', 'Meghan Trainor');
hashMap.set('This Is What You Came For', 'Calvin Harris ');

assert.equal(hashMap.collisions, 2);
assert.equal(hashMap.getLoadFactor(), 0.75);
assert.equal(hashMap.buckets.length, 16);

hashMap.set('Wake Me Up', 'Avicii'); // <--- Trigger REHASH

assert.equal(hashMap.collisions, 0);
assert.equal(hashMap.getLoadFactor(), 0.40625);
assert.equal(hashMap.buckets.length, 32);