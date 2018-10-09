// Enter your JavaScript for the solution here...


// ================= Task #1 - Loading required thumbnail
var imageFront = document.querySelector('div.editor img');
var thumbnailH2 = document.querySelector('.editor h2');
var imageText = document.querySelector('.editor p');
var thumbnailImage = document.querySelector('.thumbnails');
var submitButton = document.getElementsByTagName('input.submit');
var thumbImage = document.querySelector('.thumbnails img');
var error = document.querySelector('p.error.hidden');


function imageChangeEvent(evt) {
  var clickTarget = evt.target;
  var displayTag = document.querySelector('form #tag');
  var displayHash = document.querySelector('p.tags');
  //class editor src will equal the clickTarget's image without the '_thumb' line on the img src
  imageFront.src = clickTarget.src.replace('_thumb', '');
  //class editor h2 will change with clickTarget's title
  thumbnailH2.innerHTML = clickTarget.title;
  //class editor image alt will change with clickTarget's alt  
  imageFront.alt = clickTarget.alt;
  //class editor image title will change with clickTarget's title          
  imageFront.title = clickTarget.title;
  thumbImage = evt.target;


  displayTag.value = '';
  error.classList.add('hidden');
  imageText.innerHTML = thumbImage.dataset.tags;

  evt.preventDefault();

}

// click event on the selected area - this being the thumbnail area
thumbnailImage.addEventListener('click', imageChangeEvent); 

document.querySelector('.editor form').addEventListener('submit', function(evt) {
  console.log('form has been submitted...');
  var frm = evt.target;
  var tag = frm.elements.tag;
  var featureTags = document.querySelector('p.tags');
  var error = document.querySelector('p.error');

  if(tag.value.trim() != '') {
    if (tag.value.trim().indexOf(' ') >= 0) {
      error.classList.remove('hidden');
      error.innerHTML = 'ERROR: ...Cannot have a space between tags';
    } else {
      thumbImage.dataset.tags += '#' + tag.value.trim() + ' ';
      featureTags.innerHTML += '#' + tag.value + ' ';
      tag.value = '';
      error.classList.add('hidden');
    }
  } else {
    error.classList.remove('hidden');
    error.innerHTML = 'ERROR: ...Please enter a tag';
  }

  evt.preventDefault();
});

//Other way of doing validation
// var inputTag = document.querySelector('.editor form');

// function enterTag(evt) {
//   var target = evt.target;
//   var tag = target.elements.tag;
//   var featureTags = document.querySelector('p.tags');
//   var error = document.querySelector('p.error');

  // if(tag.value.trim() != '') {
  //   if(tag.value.includes(' ') ) {
  //     error.classList.remove('hidden');
  //     error.innerHTML = 'ERROR: ...Cannot have a space between tags';
  //   } else {
  //     thumbImage.dataset.tags += '#' + tag.value.trim() + ' ';
  //     featureTags.innerHTML += '#' + tag.value + ' ';
  //     tag.value = '';
  //     error.classList.add('hidden');
  //   }
  // } else {
  //   error.classList.remove('hidden');
  //   error.innerHTML = 'ERROR: ...Please enter a tag';
  // }

//   evt.preventDefault();
// }

// inputTag.addEventListener('submit', enterTag);