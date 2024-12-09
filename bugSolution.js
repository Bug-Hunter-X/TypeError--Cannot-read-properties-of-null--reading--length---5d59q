function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, and non-objects gracefully
  }
  return x.length; 
}