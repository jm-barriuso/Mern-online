// recursive
const { performance } = require('perf_hooks');
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
const start = performance.now();
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

const start2 = performance.now();
console.log(iFib(20));
console.log(`This took ${performance.now() - start2} milliseconds to run`);