var pizzaSize = document.getElementById("size")
var pizzaToppings = document.getElementById("toppings")
var pizzaCrust = document.getElementById("crusts")
var location = document.getElementById("location")


var toppingsType = ["Pepperoni", "Mushroom", "Extra Cheese", "Green pepper"]
 
function formInput(){
    if(size.value == "");
    alert("Select size")
}else if (size == "Small"){
    return 1000;
  } else {
    return 500
  };
    

  function location(){
      if (location.value== "")
      alert("Enter location")
  }
