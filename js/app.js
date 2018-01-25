'use strict';

//array of all products
Product.allProducts = [];

//make constructor for Product objects
function Product(filepath, name) {
  this.filepath = filepath;
  this.name = name;
  this.displayCount = 0;
  this.clickCount = 0;
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

// access the <select> element from the DOM
var selectEl = document.getElementById( 'busmall-products' );

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


