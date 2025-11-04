function endsWith(x, y) {
    if (typeof x !== 'string' || typeof y !== 'string') {
        throw new TypeError('Both arguments must be strings');
    }
    if (y === '') return true;
    return x.lastIndexOf(y) === x.length - y.length;
}

module.exports = endsWith;