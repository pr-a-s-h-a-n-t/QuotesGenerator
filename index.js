 



let quote = document.getElementById("quotes") ;
let author = document.getElementById("author") ;
let button = document.getElementById("btn");
 

function update()   {
    fetch('http://api.quotable.io/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      
       quote.innerHTML  =  `"${data.content}"`;
       author.innerHTML  =   data.author;
    });
     

     
}

