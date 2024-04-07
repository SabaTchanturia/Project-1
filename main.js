document.addEventListener("DOMContentLoaded", function () {
    let section = document.querySelector("section");
    let inputs = document.querySelectorAll("input");
    let jsonData = [
{
     "id": 1,
     "title": "Gembird MUS-4B-01 Wired Black",
     "price": 8.99,
     "image": "./images/item1.jpg"
},
        
{
    "id": 2,
    "title": "Gembird MUS-6B-01 Wired 400-1600 DPI",
    "price": 9.99,
    "image": "./images/item2.jpg"
},
{ 
    "id": 3,
    "title": "Gembird MUS-4B-06-BS Wired Black",
    "price": 11.99,
    "image": "./images/item3.jpg"
},
{ 
    "id": 4,
    "title": "Gembird MUS-4B-06-WS Wired White",
    "price": 12.99,
    "image": "./images/item4.jpg"
},
{ 
    "id": 5,
    "title": "Gembird MUSW-4B-04 Wireless 2.4 GHz 1600",
    "price": 13.99,
    "image": "./images/item5.jpg"
},
{ 
    "id": 6,
    "title": "Gembird MUS-UL-02 Wired Black",
    "price": 19.99,
    "image": "./images/item6.jpg"
},
{ 
    "id": 7,
    "title": "Gembird MUS-6B-02 Wired Black",
    "price": 18.99,
    "image": "./images/item7.jpg"
},
{ 
    "id": 8,
    "title": "Gembird MUSW-6B-02-BG Wireless Black/Grey",
    "price": 19.99,
    "image": "./images/item8.jpg"
},
{ 
    "id": 9,
    "title": "Gembird MUSG-RAGNAR-RX300 Wired",
    "price": 29.99,
    "image": "./images/item9.jpg"
},
{ 
    "id": 10,
    "title": "Gembird MUSGW-6BL-01 Wireless Black",
    "price": 25.99,
    "image": "./images/item10.jpg"
},
{ 
    "id": 11,
    "title": "Gembird MUSG-RGB-01 Wired black",
    "price": 23.99,
    "image": "./images/item11.jpg"
},
{ 
    "id": 12,
    "title": "Gembird Ergonomic Optical Black Wireless",
    "price": 27.99,
    "image": "./images/item12.jpg"
},
{ 
    "id": 13,
    "title": "Gembird MUSG-RAGNAR-RX500 Wired",
    "price": 19.99,
    "image": "./images/item13.jpg"
},
{ 
    "id": 14,
    "title": "Bloody ES5 Wired Black",
    "price": 49.99,
    "image": "./images/item14.jpg"
},
{ 
    "id": 15,
    "title": "Bloody ES7 Wired Black",
    "price": 59.99,
    "image": "./images/item15.jpg"
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
