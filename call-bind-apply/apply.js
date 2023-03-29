function add(one,two,three) {
  
  const result = args.reduce((result,value)=> result+value)
  
  console.log("The result is: " + result)

}

add.apply(this,[1,2,3]);