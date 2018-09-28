/*
    FORMS
*/

window.addEventListener("DOMContentLoaded",function(){
    var submitFormButton = document.querySelector("form");
    
    //make sure form event type is submit
    //prevent the form from submitting the data
    //we parse and check the form fields
    submitFormButton.addEventListener("submit",function(e){
        e.preventDefault();
        console.log("die");
    })


    //object

    var objPractice = document.querySelector(".bored");


    var imageObj = {
        id: 1,
        thumbnailsrc: "img/visa.png",
        largesrc: "img/visa.png"
    }
    console.log(imageObj.thumbnailsrc);
})