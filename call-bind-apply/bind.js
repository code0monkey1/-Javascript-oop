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

const driver = {
  name: 'Danica',
  displayName: function () {
    console.log(`Name: ${this.name}`);
  }
};

const car = {
  name: 'Fusion'
};

const driverBound= driver.displayName.bind(car)

invokeTwice(driverBound)


const bar = {
  numberOfDoors: 4,
  drive: function () {
     console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

const letsRoll = bar.drive;

letsRoll() // will return undefined

// bar.drive() // will be bound to the value of bar




class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
 
// Prints "obj", not "MyClass"
console.log(obj.getName());