'use strict';
var cartProducts = [];
var ulEl = document.getElementById('cart-list');



function displayProduct() {
  cartProducts = JSON.parse(localStorage.getItem( 'chosenProducts' ));
  for (var i in cartProducts) {
    var liEl = document.createElement('li');
    var imgEl = document.createElement('img');
    var liButton = document.createElement('button');
    var spanEl = document.createElement('span');
    var pName = document.createElement('p');
    
    pName.textContent = cartProducts[i].name;
    spanEl.textContent = ' Quantity: ' + cartProducts[i].quantitySelected;
    imgEl.src = cartProducts[i].filepath;
    liButton.textContent = 'Delete Item';
    // liEl.textContent = cartProducts[i].name;

    liEl.appendChild(imgEl);
    liEl.appendChild(pName);
    liEl.appendChild(spanEl);
    liEl.appendChild(liButton);
    ulEl.appendChild(liEl);

    liButton.addEventListener('click', function() {
      liEl.innerHTML = '';
    });

  }
}
displayProduct();

