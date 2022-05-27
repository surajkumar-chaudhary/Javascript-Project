const menuBtn= document.querySelector('#menu_btn');

let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}