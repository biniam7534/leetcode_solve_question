/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;

    nums.forEach((n) => {
        res = fn(res, n);
    });
    return res;

    return nums.reduce(fn, init);
    
};