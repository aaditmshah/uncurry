# Uncurry #

Smart functional programming.

## Why Uncurry? ##

You love that ECMAScript 6 allows you to write curried functions like this:

```javascript
var add = x => y => z => x + y + z;
```

However, you hate that you need to parenthesize every argument of a curried function:

```javascript
add(2)(3)(5);
```

You want to be able to apply curried functions to multiple arguments at once:

```javascript
add(2, 3, 5);
```

What should you do? Uncurry the function:

```javascript
var $ = require("uncurry");

var add = $(x => y => z => x + y + z);
```

Think sideways.
