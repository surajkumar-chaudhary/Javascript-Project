async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    createBreadList(data.message);
    console.log(data.message);
}  

start();

function createBreadList(breedList){

    document.getElementById('breed').innerHTML=`
                 <select onchange="loadByBreed(this.value)">
                     <option value="">Choose a dog breed</option>
                     ${Object.keys(breedList).map(function(breed){
                         return `<option>${breed}</option>`
                     }).join('')}
                 </select>`
}

async function loadByBreed(breed){

    if(breed != "Choose a dog breed"){
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();

    createSlideShow(data.message);
}
}

function createSlideShow(images){

    let currentimages = 0;
    document.getElementById('slideshow').innerHTML =`
    <div class="slide" style="background-image:url('${images[0]}')"></div>
    <div class="slide" style="background-image:url('${images[1]}')"></div>
    `
    
    currentimages += 2
    
    setInterval(nextSlide, 4000)

    function nextSlide(){
        document.getElementById('slideshow').insertAdjacentHTML("beforeend", `<div class="slide" style="background-image:url('${images[currentimages]}')"></div>` );
        setTimeout(function() {
            document.querySelector(".slide").remove()
        },4000)
        if(currentimages + 1 >= images.length){
            currentimages = 0
        }else{
            currentimages++
        }
    }
    }