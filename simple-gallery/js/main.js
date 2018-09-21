
window.addEventListener('DOMContentLoaded',function(){
    // ALL our code is global to the function
    var gallery = document.querySelector('.gallery');
    //how to add and remove class from the attached css file
    //elm.classList.add
    //elm.classList.remove
    //elm.classList.toogle
    gallery.classList.add('red');

    var toogleButton = gallery.querySelector('.toggleBtn');
    toogleButton.addEventListener('click', hideImage);
    function hideImage(e){
        gallery.querySelector('.gallery-display').classList.add('.hidden');
    }
        
})