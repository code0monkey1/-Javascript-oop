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


invokeTwice(function(){
  dog.growOneYear()
})

console.log("Dog's age is",dog.age)