'use strict';
var cartProducts = [];


function displayProduct() {
  cartProducts = JSON.parse(localStorage.getItem( 'chosenProducts' ));
}
displayProduct();