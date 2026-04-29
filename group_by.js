onst result = {};

    for (let items of this) {
        const key = fn(items);

        if (!result[key]) {
            result[key] = [];
        }

        result[key].push(items); // ✅ FIXED
    }

    return result;