function add(a,b){
  return a+b;
}

console.log(add.call(this,2,4))