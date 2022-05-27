/* /* 
const div = document.querySelector('div');

console.log(div.innerText);
console.log(div.textContent);
console.log(div.innerHTML);
 


const body= document.body;
const div = document.createElement('div');
const st = document.createElement("strong");
st.innerHTML= "<h1>im a teacher</h1>";

console.log(st.innerText);


//div.innerText= "<h1>im a student</h1>";
//div.textContent= "<h1>im a student</h1>";

body.append(div);
body.append(st) */

let input = document.querySelector('input');
let  frstbtn= document.querySelector('.firstbtn');
let ul= document.querySelector('ol');

frstbtn.addEventListener('click' , ()=>{
    
    const getitem= input.value;
     input.value='';

const listitem = document.createElement('li');

ul.appendChild(listitem);
var span= document.createElement('span');

listitem.appendChild(span);

span.textContent= getitem;

const dlt = document.createElement('button');

dlt.textContent = 'delete';

listitem.appendChild(dlt);

    dlt.addEventListener('click', ()=> {
    ul.removeChild(listitem);

                                       })

    input.focus();
})



