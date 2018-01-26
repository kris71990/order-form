'use strict';

var currentProductIndex;

//array of all products
Product.allProducts = [];

//array of chosen products
Product.chosenProducts = [];

//make constructor for Product objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.quantitySelected = 0;
  Product.allProducts.push(this);
}

//create instances of Products
function createProducts(){
  Product.totalClicks = 0;
  new Product('img/bag.jpg' ,'R2D2 Luggage');
  new Product('img/banana.jpg' ,'Banana Slicer');
  new Product('img/bathroom.jpg' ,'Bathroom Tablet Holder');
  new Product('img/boots.jpg' ,'Toeless Boots');
  new Product('img/breakfast.jpg' ,'Breakfast Appliance');
  new Product('img/bubblegum.jpg' ,'Meatball Bubble Gum');
  new Product('img/chair.jpg' ,'Convex Chair');
  new Product('img/cthulhu.jpg' ,'Cthulhu Action Figure');
  new Product('img/dog-duck.jpg' ,'Dog Duck Bill');
  new Product('img/dragon.jpg' ,'Dragon Meat');
  new Product('img/pen.jpg' ,'Pen Utensils');
  new Product('img/pet-sweep.jpg' ,'Pet Sweeper Shoes');
  new Product('img/scissors.jpg' ,'Pizza Scissors');
  new Product('img/shark.jpg' ,'Shark Sleeping Bag');
  new Product('img/sweep.png' ,'Sweeper for Baby');
  new Product('img/tauntaun.jpg' ,'Tauntaun Sleeping Bag');
  new Product('img/unicorn.jpg' ,'Unicorn Meat');
  new Product('img/usb.gif' ,'USB Tentacle');
  new Product('img/water-can.jpg' ,'Unique Watering Can');
  new Product('img/wine-glass.jpg' ,'Decorative Wine Glass');
}
createProducts();

// access the elements from the DOM
var selectEl = document.getElementById( 'busmall-products' );
var imgEl = document.getElementById( 'product-image' );
var buttonEl = document.getElementById( 'add-to-cart');
var inputEl = document.getElementById( 'product-quantity' );
var divEl = document.getElementById( 'product-selection' );
var linkEl = document.getElementById( 'view-cart' );
var ulEl = document.getElementById( 'cart-list' );

//for each product
for( var i = 0; i < Product.allProducts.length; i++){

  //create an <option> element
  var optionEl = document.createElement('option');

  // assign product name to that option element
  optionEl.value = Product.allProducts[i].name;
  optionEl.textContent = Product.allProducts[i].name;

  //append the <option> to the <select> element
  selectEl.appendChild(optionEl);
}

selectEl.addEventListener('change', showImage);
buttonEl.addEventListener('click', addToCart);
linkEl.addEventListener('click' , storeProducts );

function showImage(e) {
  for(var i in Product.allProducts) {
    if(e.target.value === Product.allProducts[i].name){
      imgEl.src = Product.allProducts[i].filepath;
      currentProductIndex = i;
    }
  }
}

function addToCart() {
  if (inputEl.value !== ''){
  //add currently showing quantity to currently showing product object
    Product.allProducts[currentProductIndex].quantitySelected = parseInt(inputEl.value);

    //push currently showing product to array of chosen products
    Product.chosenProducts.push(Product.allProducts[currentProductIndex]);

    //reset quantity field
    inputEl.value = '';

    //display confirmation message and link to shopping cart
    var msgEl = document.createElement('p');
    msgEl.textContent = 'Item added to cart.';
    divEl.appendChild(msgEl);

  }
  else {
    alert('Please enter a quantity');
  }
}

function storeProducts() {
  var stringifyChosenProducts = JSON.stringify(Product.chosenProducts);
  localStorage.setItem( 'chosenProducts', stringifyChosenProducts );
}
