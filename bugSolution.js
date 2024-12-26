function foo(a, b) {
  if (a === null && b === null) {
    // Handle the case where both a and b are null
    return; 
  } else if (a === null || b === null) {
    // Handle the case where only one of a or b is null
    return;
  }
  // ... rest of the function
}