// Write sumPrimes so it returns the sum of all prime numbers that are
// less than or equal to num.

// Based on https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
function sumPrimes (num) {
  // Define an array from 0 to n (hence n+1) and initialize to true
  const isPrime = Array(num + 1).fill(true);
  // Special cases
  isPrime[0] = false;
  isPrime[1] = false;
  // Start with known lowest prime number (2)
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      // Mark as not prime all the multiples of i
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // Use reduce to sum up all the primes
  return isPrime.reduce((sum, prime, idx) => prime ? sum + idx : sum, 0);
}

module.exports = sumPrimes;
