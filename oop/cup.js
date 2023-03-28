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

  get name(){
    return this.#name;
  }

  set name(value){
    this.#name=value
  }

}


const myCup = new Cup("Happy","Tumbler")

myCup.introduceYourself()

myCup.name="Chiranjeev"

myCup.introduceYourself()