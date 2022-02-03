document.addEventListener("DOMContentLoaded", function() {
 let ul = document.querySelector('#list')
 let divPanel = document.querySelector("#show-panel")
 fetch('http://localhost:3000/books')
 .then(res=>res.json())
 .then(data=>{
    
     for(let obj of data){
        let li = document.createElement('li')
        li.textContent = obj.title
        ul.appendChild(li)

   
     }
     

 })


});
