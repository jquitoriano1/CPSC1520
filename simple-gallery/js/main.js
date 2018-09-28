
window.addEventListener('DOMContentLoaded',function(){
    // ALL our code is global to the function
    // var windowViewState = false;
    // var gallery = document.querySelector('.gallery-display');
    // var toogleButton = document.querySelector('.toggleBtn');
    // //how to add and remove class from the attached css file
    // //elm.classList.add
    // //elm.classList.remove
    // //elm.classList.toogle
    // gallery.classList.add('red');

    // toogleButton.addEventListener('click', hideImage);
    // function hideImage(e){
    //     // gallery.querySelector('.gallery-display').classList.toggle('hidden');
    //     if( windowViewState === true){
    //         windowViewState = false;
    //         console.log("hide window");
    //         gallery.classList.add('hidden');
    //     }
    //     else{
    //         window.windowViewState = true;
    //         gallery.classList.remove('hidden');
    //     }
    // }

    var incrementBtn = document.querySelector('.counter button:first-of-type');
    var decrementBtn = document.querySelector('.counter button:last-of-type');
    var display = document.querySelector('.display');
    var count = 5;

    //setup user interface function...
    function configUI(){
        display.innerHTML = count;
    }

    incrementBtn.addEventListener('click', onUpdateDisplay);
    decrementBtn.addEventListener('click', onUpdateDisplay);

    function onUpdateDisplay(e){
        if(e.target.id === "up"){
            count++;
            console.log(count);
        }
        else{
            count--;
            console.log(count);
        }
    }


    configUI();
});