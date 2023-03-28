const button = document.getElementById('button');

button.addEventListener('click',(function(){
   let count =0;

   return function(){
     count++;

     alert("The count is " + count)
   }
})())