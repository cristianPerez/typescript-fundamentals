// Type Never

// Inferred

function handleError(code: number, message: string): never {
  // Process your code handleError
  // Generate a message.
  throw new Error(`${message}. Code:${code}`);
}

try {
  handleError(404, 'Not found');
} catch (error) {
  console.log(error);
}

function sumNumbers(limit: number): never {
  let sum = 0;
  while(true) {
    sum ++;
  }
  // return sum;
}

sumNumbers(10);