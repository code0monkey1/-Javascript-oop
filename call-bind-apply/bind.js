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

//invokeTwice(dog.growOneYear)

// this will not increment the dog's age
// as this will be bound to the global object,
// as the state was not preserved

// invokeTwice(function() {
//   dog.growOneYear();
// })

// In the previous case , the closure captures 
// the State , because of which growOneYear
// will be bound to the dog object

const bound = dog.growOneYear.bind(dog)

// Here the function's context i.e this is 
// explicitly bound to the dog object

invokeTwice(bound)

console.log("Dog's age is",dog.age)