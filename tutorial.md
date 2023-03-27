
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

### Global Functions are Methods on window

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
