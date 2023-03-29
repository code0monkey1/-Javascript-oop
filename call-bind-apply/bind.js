//  bind() returns a new function that, when called, has this set to the value we give it.

const dog={
  age :5,
  growOneYear:function(){
    this.age++;
  }
}

function invokeTwice(cb) {
  
  cb()
  cb()
}

const bound = dog.growOneYear.bind(dog)

invokeTwice(bound)

console.log("Dog's age is",dog.age)