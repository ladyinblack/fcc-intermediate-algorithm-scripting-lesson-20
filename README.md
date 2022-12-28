# fcc-intermediate-algorithm-scripting-lesson-20

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-try534)

## PROBLEM EXPLANATION
When I started the program I figured I just had to create the six functions mentioned in the details.  However, it was not that simple.  Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as key too which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separate string if you wish but an array is easier to deal with a strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that.  Once you understand what you need to do, this problem is very easy and straightforward.

### REFERENCE LINKS
- [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Details of the Object Model](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)


## HINTS

### Hint 1
Use the **this** notation to create the keys instead of regular functions: This means instead of `var varName = function () { /*...*/ }` you should use `this.varName = function () { /*...*/ }`.

### Hint 2
The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section.  This means if you need to work with variables, make them local and not a key: `this.fullName = firstAndLast;`.

### Hint 3
Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way.  This happens to all of us at some point.

### Hint 4
If you are having problems with writing the `setter` methods, below is a template for a `set` method:
```js
this.setFullName = function(input) {
  // Insert your code here
};
```


