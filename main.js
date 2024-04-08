document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector("section");
    let inputs = document.querySelectorAll("input");
    let jsonData = [
{
     "id": 1,
     "title": "Thermo Ball Etip Gloves",
     "price": 5.99,
     "image": "./shop-images/shop-watch-1.webp"
},
        
{
    "id": 2,
    "title": "Thermo Ball Etip Gloves",
    "price": 9.99,
    "image": "./shop-images/shop-watch-2.webp"
},
{ 
    "id": 3,
    "title": "Thermo Ball Etip Gloves",
    "price": 21.99,
    "image": "./shop-images/shop-watch-3.webp"
},

{ 
    "id": 4,
    "title": "Thermo Ball Etip Gloves",
    "price": 83.99,
    "image": "./shop-images/shop-watch-4.webp"
},
{ 
    "id": 5,
    "title": "Thermo Ball Etip Gloves",
    "price": 122.99,
    "image": "./shop-images/shop-watch-5.webp"
},
{ 
    "id": 6,
    "title": "Thermo Ball Etip Gloves",
    "price": 299.99,
    "image": "./shop-images/shop-watch-6.webp"
},
       

];

function displayItems(data) {
section.innerHTML = "";
     data.forEach(item => {
         section.innerHTML += `
       <div class="card" style="width: 18rem;">
       <img src="${item.image}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${item.title}</h5>
         <p class="card-text">Price: ${item.price}</p>
          <button class="btn btn-primary">Buy Now</button>
     </div>
  </div>
            `;
        });
    }

    displayItems(jsonData);

    document.querySelector("button.btn-success").addEventListener('click', function() {
        let filteredList = jsonData.filter(item => 
            item.price >= inputs[0].value &&
            item.price <= inputs[1].value &&
            item.title.toLowerCase().includes(document.getElementById('searchInput').value.toLowerCase())
        );

        displayItems(filteredList);
    });
});