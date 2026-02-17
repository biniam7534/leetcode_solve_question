/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const result = [];

    const bitCount = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    };

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            if (bitCount(h) + bitCount(m) === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }

    return result;
};