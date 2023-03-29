function add(one,two,three) {

  const result =one + two + three;

  console.log("The result is: " + result)
}

add.apply(this,[1,2,3]);