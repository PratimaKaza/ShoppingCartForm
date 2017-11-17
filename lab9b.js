
var shoppingItem =[];
var shoppingPrice = [];
total = 0;
var test=true;
function addItem(){
  var test=true;
while (test === true) {
      var item = prompt("Please enter item you want to add: ");
      shoppingItem.push(item); 
      var price = prompt("Please enter price of the item you want to add: ");
      shoppingPrice.push(price);  
      test = ('y' == (prompt("Do you want to add another item? y/n")));    
}
console.log(shoppingItem);
console.log(shoppingPrice);
}

function sum() {
  for(i=0; i< shoppingPrice.length; i ++){
    total += Number(shoppingPrice[i]);
  }
  console.log("Your total is $" + total);
}
console.log("This is your shopping cart: ")
addItem();
sum();

/// starting to attach the button


