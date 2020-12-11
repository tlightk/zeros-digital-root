Install the package by typing this into your terminal:
```
npm i zeros_digital_root
```

Import the package by requiring it in your file(s):
```
require("zeros-digital-root");
```

This package was inspired by the Zero Escape Series, a horror, science-fiction visual novel created by Spike Chunsoft.

What is a digital root? According to wikipedia:

The digital root (also repeated digital sum) of a natural number in a given number base is the (single digit) value obtained by an iterative process of summing digits, on each iteration using the result from the previous iteration to compute a digit sum. The process continues until a single-digit number is reached.

With this package, simply call the digitalRoot function and pass a postive integer as an argument.

Examples:
```
digitalRoot(123);
// 1 + 2 + 3 = 6
// return 6

digitalRoot(8818);
// 8 + 8 + 1 + 8 = 25
// 2 + 5 = 7
// return 7
```

Enjoy!