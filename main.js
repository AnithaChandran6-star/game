var inputs =[];

function getparagraph1()
{
   var inputs =[];

   for( var i = 1; i <= 6; i++)
   {
       inputs.push(document.getElementById("showparaghraph1"+ i));
}
   }
   inputs.join(". ");
   document.getElementById("showparaghraph1").innerHTML = inputs.join(". ");
   console.log(inputs); 