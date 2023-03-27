
# Carefully review this code

```javascript
const car = {
  numberOfDoors: 4,
  drive: function () {
     console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

const letsRoll = car.drive;

letsRoll();
```

### Q. What does you think *`this`*  refers to in the code above?

###### Hint : the function is being called outside the object body

> *Answer : this refers to the  window object*

Explanation : *The Window Object*

This object is provided by the browser environment and is globally accessible to your JavaScript code using the identifier, window. This object is not part of the JavaScript specification (i.e., ECMAScript); instead, it is developed by the W3C.

**Since the window object is at the highest (i.e., global) level, an interesting thing happens with global variable declarations. Every variable declaration that is made at the global level (outside of a function) automatically becomes a property on the window object**

---

## Global Functions are Methods on window

**Similarly to how global variables are accessible as properties on the window object, any global function declarations are accessible on the window object as methods:**

```javascript

function learnSomethingNew() {
  window.open('https://www.udacity.com/');
}

window.learnSomethingNew === learnSomethingNew
// true
```

> Declaring the learnSomethingNew() function as a global function declaration
>
> (i.e., it's globally accessible and not written inside another function) makes it accessible to your code as either learnSomethingNew() or window.learnSomethingNew().

### *Functions in Javascript vs Other Languages*

![Functions in Javascript vs Other Languages ][1]
> If a programming language has `first class function`
then ,in that language a function has equal status to any other data structure eg : string , int , boolean etc ...

    This means that you can do with a function just
    about anything that you can do with other 
    elements, such as numbers, strings, 
    objects, arrays, etc. JavaScript functions 
    can
  
      1. Be stored in variables
      2. Be returned from a function.
      3. Be passed as arguments into another function.

[1]:./first-class-functions.jpg "functions in JavaScript vs other languages"
--------------------------------------------------------

# Higher Order function

> A function that returns another function is known as higher-order function. Consider this example:

```javascript

function alertThenReturn() {
  alert('Message 1!');

  return function () {
    alert('Message 2!');
  };
}
```

Since `alertThenReturn()` returns that inner function, we can assign a variable to that return value

`const innerFunction = alertThenReturn();`

We can then use the innerFunction variable like any other function!

`innerFunction();  
// alerts 'Message 2!'`

Likewise, this function can be invoked immediately without being stored in a variable. We'll still get the same outcome if we simply add another set of parentheses to the expression

```javascript
alertThenReturn();:

alertThenReturn()();

// alerts 'Message 1!' then alerts 'Message 2!'
```

---

## Callback Function

*A function that is passed as an argument into another function is called a callback function.*
