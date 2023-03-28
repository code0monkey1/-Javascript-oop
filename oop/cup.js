class Cup{
  
   #name
   #type

  constructor(name,type){
   this.#name=name;
   this.#type=type;
  }
  
   introduceYourself(){
      console.log(`I am a cup of type ${this.#type} and you my name is ${this.#name}`);
  }
}


const myCup = new Cup("Happy","Tumbler")

myCup.introduceYourself()