var RandomizedSet = function() {
    this.list = []
    this.indexes = new Map()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const index = this.list.length;
    if(this.indexes.has(val)){
        return false
    }else{
        this.indexes.set(val, index);
        this.list.push(val);
        console.log(this.indexes.entries())
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.indexes.has(val)){
        const index = this.indexes.get(val);
        const lastItem = this.list.length - 1
        //swap value with lastitem
        this.list[index] = this.list[lastItem]
        this.list[lastItem] = val;
        this.list.pop();
        this.indexes.delete(val)
        this.indexes.set(this.list[index], index)
        return true
    }else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.list.length)
    return this.list[randomIndex];
};