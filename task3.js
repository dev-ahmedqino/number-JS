var firstValue= prompt("Enter First Number");

var secValue= prompt("Enter Second Number");

var thirdValue= prompt("Enter Third Number");

var forthValue= prompt("Enter forth Number");

var fifthValue= prompt("Enter fifth  Number");

var valueLength = [firstValue,secValue,thirdValue,forthValue,fifthValue]
function Calc () { 
var totalValue=+firstValue+ +secValue+ +thirdValue+ +forthValue+ +fifthValue
var avgValue=(totalValue/valueLength.length); 
alert("The total Value are " + totalValue);
alert("The Average Value are " + avgValue);
alert("The Percentage Value are " + avgValue + " %");
}
Calc()