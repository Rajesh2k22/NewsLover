
 
 async function get(){

   console.log("hello");

   document.getElementById("cont").innerHTML="";

    

     var search= document.getElementById("search");

   

      var api= `https://newsapi.org/v2/everything?q=${search.value}&apiKey=b36f449f762a49498fd1940d3ec86847`;

    const response = await  fetch(api).catch(function (err){
             console.log(err);
             
        });

    
    const data = await response.json();
    console.log(data);

    if(data){

        document.getElementById("cont").innerHTML="Something Went Wrong........";  
    }

     for(let i=0 ;i<= Math.min(10, data.articles.length);i++){

         var src= data.articles[i].urlToImage;
         var title= data.articles[i].title;
         var content=  data.articles[i].description;

          console.log(src);
          console.log("hello");
         var divele= ` <div class="card mb-3 mt-3">
<img src= ${src} class="card-img-top" alt="...", width="50%">
<div class="card-body">
  <h5 class="card-title">${title}</h5>
  <p class="card-text"> ${content}</p>
  
</div>
</div>`

  console.log(divele);

   document.getElementById("cont").innerHTML+= divele;


     }


     
 }