var convertGallonsToLiters = function(gallons){
  var liters = gallons * 3.7854;
  return liters;
};

var inputGallons = parseInt(prompt("Enter the number of gallons:"));
alert(inputGallons + " Gallons = " + convertGallonsToLiters(inputGallons) + " Liters");
