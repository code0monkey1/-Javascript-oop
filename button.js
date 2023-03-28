
let button=(function(){
   let count =0;

   return function(){
     count++;

     alert("The count is " + count)
   }
})()