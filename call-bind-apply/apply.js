function add(...args) {
   
  const result = args.reduce((result,value)=> result+value)
  
  console.log("The result is: " + result)

}


add.apply(this,[1,2,3,4,5,6,7,8,9,10])