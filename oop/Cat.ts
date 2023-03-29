class Cat{
    
    constructor(private _name:string){}

  sayMyName(){
     console.log("My name is " + this._name);
  }

}

const myCat = new Cat("blinky");

console.log(myCat.sayMyName());

console.log(myCat)