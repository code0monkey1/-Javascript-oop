function Dog() {
  
  this.bark=function(){
    console.log("I Will bark ,bow bow")
  };

}

const myDog = new Dog();

console.log(myDog.hasOwnProperty("bark")) // true

console.dir(this)