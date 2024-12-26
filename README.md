# Incorrect Null Check in JavaScript Function

This repository demonstrates an uncommon code error in JavaScript involving an incorrect null check. The function `foo` intends to handle cases where either `a` or `b` is null, but it misses the scenario where both are null at the same time.  This can lead to unexpected behavior or errors if not properly addressed.

The `bug.js` file contains the code with the error. The `bugSolution.js` file shows the corrected code.

## How to reproduce

1. Clone this repository.
2. Run `bug.js` and observe the potential issues.
3. Compare it with the fixed version in `bugSolution.js` to understand the correction.