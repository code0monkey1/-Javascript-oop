function add(a,b){
  return a+b;
}

console.log(add.call(this,2,4))

module.exports= add

console.log(this)


const mockingbird={
   title:"To kill a Mockingbird",
   describe:function(){
    console.log(` ${this.title} is a classic novel`)
   }
}


mockingbird.describe()


const harrypotter={
  title:"Harry Potter"
}

mockingbird.describe.call(harrypotter)