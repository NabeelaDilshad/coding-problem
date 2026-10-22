

// Level 1
// ├── Debounce
// ├── Throttle
// ├── Promise.all
// ├── Promise pool
// └── Event emitter

// Level 2
// ├── LRU Cache
// ├── TTL Cache
// ├── Rate limiter
// ├── Retry + Backoff
// └── Circuit breaker

// Level 3
// ├── Job queue
// ├── Priority queue
// ├── Idempotency
// ├── Distributed lock
// └── Cache-aside

// Level 4
// ├── Notification system
// ├── Order processing
// ├── Payment system
// ├── File upload
// └── API Gateway

// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

console.log("Try clicking the Run button.");

class CircuitBreaker {
  constructor(action, failureThreshold = 3, timeout = 5000) {
    this.action = action;
    this.failureThreshold = failureThreshold;
    this.timeout = timeout;

    this.failures = 0;
    this.state = "CLOSED";
    this.nextAttempt = 0;
  }

  async execute(...args) {
    if (this.state === "OPEN") {
      if (Date.now() < this.nextAttempt) {
        throw new Error("Circuit is OPEN");
      }

      this.state = "HALF_OPEN";
      console.log("➡️ HALF_OPEN: testing service...");
    }

    try {
      const result = await this.action(...args);

      this.failures = 0;
      this.state = "CLOSED";

      console.log("✅ Success: Circuit CLOSED");

      return result;
    } catch (error) {
      this.failures++;

      console.log(`❌ Failure #${this.failures}`);

      if (this.failures >= this.failureThreshold) {
        this.state = "OPEN";
        this.nextAttempt = Date.now() + this.timeout;

        console.log("🔴 Circuit OPEN");
      }

      throw error;
    }
  }
}

// Fake API
let shouldFail = true;

const apiCall = async () => {
  if (shouldFail) {
    throw new Error("API is down!");
  }

  return "API response OK";
};

const breaker = new CircuitBreaker(
  apiCall,
  3,     // 3 failures
  5000   // 5 seconds
);

// Test
async function test() {
  for (let i = 1; i <= 5; i++) {
    try {
      const result = await breaker.execute();
      console.log("Result:", result);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }
}

test();
