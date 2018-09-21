// console.log();
// dot syntax
/* 
   JS
   Objects
     - properties
     - methods 
     - events

     Style EMCAScript
     - standard rules spec
     - ES5 spec
     - ES6
     - ES2017
     - ES2018

    Rules ECMA
    = dot syntax
    statement JS
    obj.(prop/method).value

    Property Statement
    object.prop = value
    navigator.name   //read only
    window.name="new window";  Read/Write  or Read Only

    Method Statement
    object.method('args');
    console.log('help me');

    Variables JS
    var name assignment operator  value
    creating variable names BP
      no numbers, no uppercase first Letter, = ? @ 
      no reserver charachter t ot the language.

      BP Var Naming
      be semantic about the content or use of the variable
       var albertaTaxRate = 0.25;
       albertTaxRate camel case;

       data types of variables
       string text ''
       123 number
       true and false   booleans
       array, function, dom elemements.

      
*/
// Decalaring a Variable

var secondIcon = document.querySelector('.icon-view li:last-child');

console.log(secondIcon);

//create a function that calculate the tax
//funcions

//hard coded variable
var albertaTaxRate = 0.05;

//parameters
function calculateTax(price){
  // perform the action
  return albertaTaxRate * price;
}

// function call
//sending arguments
console.log('value returned:', calculateTax(100));

//shipping calculator

var perKilo = 2.30;

function shippingCalculator(weight){
  var total= perKilo * weight;
  return '$' + total.toFixed(2);
}

console.log('The shipping rate is ', shippingCalculator(100));

// another example
/* create function send it a paragraph from the dom and change the text color and both color and dom element */
// function paragraphColor(item,pColor){

// }
var shoppingCart = document.querySelector('#cart');

// shoppingCart.addEventListener('click', onCheckOut);

// function onCheckOut(evt){
//   console.log(evt.target);
// }







//
var loginButton = document.querySelector('#cart button');
loginButton.addEventListener('click', onSubmitLogin);
function onSubmitLogin(e){
  console.log("lakad matatag!! normalin, normalin")
}

//system event
window.addEventListener('load', function(e){
  console.log(e)
})
//system event (start of every script) put everything inside
window.addEventListener('DOMContentLoaded', function(e){
  var formatOutput = document.querySelector('#cart button');
  var taxcalculator = document.querySelector('#cart');
  formatOutput.addEventListener('click', onFormatString);

  function onFormatString(e){
    var price = taxcalculator.querySelector('input:first-of-type').value;
    var tax = taxcalculator.querySelector('input:last-of-type').value;

    var totalPrice = (parseInt(price) * parseFloat(tax)) + parseInt(price);
    taxcalculator.querySelector('textarea').value = "Total Price $: " + totalPrice.toFixed(2);
    console.log(totalPrice);
    
  }
})


//September 21, 2018 more js



