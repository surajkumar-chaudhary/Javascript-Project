

let input = document.querySelector('.input');

let addbtn = document.querySelector('.add-btn');

let ul = document.querySelector('ul');


addbtn.addEventListener('click' , ( ) => {
 

let value = input.value;
input.vlaue = '';

const li = document.createElement('li');

ul.appendChild(li);

const h4 = document.createElement('span');

h4.textContent = value;
console.log(h4.textContent);
li.appendChild(h4);

const buttn = document.createElement('button');
buttn.textContent= 'delete';


li.appendChild(buttn);

buttn.addEventListener('click' , ()=>{

    ul.removeChild(li);
})

input.focus();

})
