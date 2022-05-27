const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"
const sound = document.getElementById("sound");
const button = document.getElementById('button')

button.addEventListener('click' , ()=>{

      const input = document.getElementById('inputsection').value;
      console.log(input);
      fetch(`${url}${input}`)
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                  document.querySelector('.mainInformation').innerHTML=`
                  <div class="asitis">${input}</div>
                  <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high sound"></i>
                </button>
                  <span>${data[0].meanings[0].partOfSpeech}</span>
                  <span>${data[0].phonetics[0].text}</span>
                  <div class="info">
            <div class="meaning1">${data[0].meanings[0].definitions[0].definition}</div>
                  </div>
                  `
                  sound.setAttribute('src' , `${data[0].phonetics[1].audio}`);
              })
             
})

function playSound(){
    sound.play();
}
