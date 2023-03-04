var firstValue= prompt("Enter First Number");

var secValue= prompt("Enter Second Number");

var thirdValue= prompt("Enter Third Number");

function maxMinCalc () { 
var maxValue=Math.max(firstValue,secValue,thirdValue)
var minValue=Math.min(firstValue,secValue,thirdValue)
alert("The Maximum Value are " + maxValue);
alert("The Minimum Value are " + minValue);
}
maxMinCalc()