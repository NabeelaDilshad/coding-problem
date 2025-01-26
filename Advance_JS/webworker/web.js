// worker.js
self.onmessage = function (e) {
    console.log('Worker received data:', e.data);
    const { num } = e.data;

    // Perform a heavy calculation (e.g., finding prime numbers)
    const primes = [];
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) primes.push(i);
    }

    // Send the result back to the main thread
    self.postMessage({ primes });
};

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}
