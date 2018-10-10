//TESTING ES6

// const ridgid ="thedata";
// let change = 12;

// console.log(change = "pop!")

//TEMPLATE STRINGS

var obj={
    src:"img/img.jpg",
    text:"some text"
}

let anArray=[obj];

let newArray = anArray.map (val,index)=>{
    let htmlTemplate=`<p>${obj.prop}</p>`;
    return
}
document.body.insertAdjacentHTML('body',htmlTemplate);

console.log(`src: ${obj.src}`)