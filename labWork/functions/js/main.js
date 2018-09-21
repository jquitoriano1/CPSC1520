function updateInnerHTML(selector, newValue) {
    document.querySelector(selector).innerHTML = newValue;
}

updateInnerHTML('h1', 'updated text');

function strong(value) {
    return '<strong>' + value + '</strong>';
}

function displayName(firstName, lastName){
    console.log('My name is ' + firstName +' '+ lastName);
}

displayName('Jocel Markus', 'Quitoriano');

