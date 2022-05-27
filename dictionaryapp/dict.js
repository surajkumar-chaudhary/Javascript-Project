
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.querySelector('.result');

const sound = document.getElementById('sound');

const button = document.getElementById('search_btn');


button.addEventListener('click' , ()=>{
     const inputword = document.getElementById('inp_word').value;

     fetch(`${url}${inputword}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            result.innerHTML=`<div class="word">
                <h3>${inputword}</h3>
                <button onclick="playSound()">
                    <i class="fa-solid fa-volume-high sound"></i>
                </button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[0].text || ''}</p>
            </div>
            <p class="word_meaning">${data[0].meanings[0].synonyms[0] || ''}
            </p> <br>
            <p class="word_example">${data[0].meanings[0].definitions[0].definition}
            </p>`;

            sound.setAttribute('src' , `${data[0].phonetics[1].audio || data[0].phonetics[0].audio || data[0].phonetics[3].audio || data[0].phonetics[4].audio || data[0].phonetics[5].audio 
            || data[0].phonetics[6].audio}`);
        })
        .catch(()=>{
            result.innerHTML= `<h2> Sorry , couldn't find the word</h2>`;
        })
})

function playSound(){
              sound.play();
        }