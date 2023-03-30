const rodent = {
  favoriteFood: 'cheese',
  hasTail: true
};

function Mouse() {
  this.favoriteFood = 'cheese';
}

Mouse.prototype=rodent // placed rodent as mouse's prototype

const ralph = new Mouse();

const result = rodent.isPrototypeOf(ralph);

console.log(result);
// true

//---

console.log("Prototype of Ralph",Object.getPrototypeOf(ralph)) // this will give rodent