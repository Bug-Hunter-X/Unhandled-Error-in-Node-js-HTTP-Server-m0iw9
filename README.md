# Unhandled Error in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions that cause the server to crash.  The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with improved error handling.

## Problem

The original code creates a simple HTTP server but lacks proper error handling.  If an error occurs (e.g., port already in use), the server will crash without providing any useful information.

## Solution

The solution uses the `'error'` event listener on the HTTP server instance. This allows the server to gracefully handle errors and continue running, logging the error details to the console.  This prevents unexpected server downtime and provides valuable debugging information.

## How to Run

1. Clone the repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js` to see the unhandled error.
4. Run `node bugSolution.js` to see the improved error handling.