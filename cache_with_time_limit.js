var TimeLimitedCache = function() {
        this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const now = Date.now();
    
    let exists = false;
    
    if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expiry > now) {
            exists = true;
        }
    }

    this.cache.set(key, {
        value: value,
        expiry: now + duration
    });

    return exists;

    
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
     const now = Date.now();

    if (!this.cache.has(key)) return -1;

    const entry = this.cache.get(key);

    if (entry.expiry <= now) {
        this.cache.delete(key);
        return -1;
    }

    return entry.value;
    
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const now = Date.now();
    let count = 0;

    for (let [key, entry] of this.cache) {
        if (entry.expiry > now) {
            count++;
        } else {
            this.cache.delete(key);
        }
    }

    return count;
    
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */