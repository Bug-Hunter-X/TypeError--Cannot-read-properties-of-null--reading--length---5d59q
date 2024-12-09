# JavaScript Error Handling: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error, `TypeError: Cannot read properties of null (reading 'length')`, and provides a solution using robust error handling.

## The Bug
The `bug.js` file contains a function that attempts to access the `length` property of a variable that might be null. This results in the error when the input is null. 

## The Solution
The `bugSolution.js` file presents a corrected version of the function, explicitly checking for null values before accessing the `length` property.  This prevents the error and makes the code more robust.

## How to Run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred code editor or IDE.
3. Execute each file and observe the results.  You can use Node.js to run them.

This demonstrates the importance of error handling in JavaScript to avoid unexpected crashes and enhance the reliability of your code.