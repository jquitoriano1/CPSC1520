window.addEventListener("DOMContentLoaded",function(){
    var imageLink = document.querySelector(".feature");

    imageLink.addEventListener('click',imgLinkCLickHandler)

    function imgLinkCLickHandler(e){
        var showImage = document.querySelector("img.feature");
        showImage.src = imageLink.href;
        showImage.classList.remove("hidden");

        e.preventDefault();
    }
})