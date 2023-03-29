

function Dog(name){
   
}

Dog.prototype.greet=function(){
  console.log(`Bow Bow , my name is ${this.name}`)
}

Dog.prototype.age="Kattoo"
const myDog = new Dog("Blinky")

myDog.greet()

console.log(Dog.prototype)