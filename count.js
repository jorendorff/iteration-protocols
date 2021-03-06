// count: returns evenly spaced values starting with start

// Functional style
function count(start = 0, step = 1) {
    let current = start;
    return {
        next: function() {
            let result = current;
            current += step;
            return { done: false, value: result };
        }
    };
}

// D-style ranges
function count(start = 0, step = 1) {
    return {
        get empty() { return false; },
        get front() { return start; },
        popFront: function () { start += step; }
    };
}
