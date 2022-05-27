const problemElement = document.querySelector('.problem')
const ourForm = document.querySelector('.our_form')
const ourField = document.querySelector('.our_field');
const pointNeeded = document.querySelector('.point_needed');
const mistakesAllowed = document.querySelector('.mistakes_allowed');

function generateNumber(max){
    return Math.floor(Math.random() * (max + 1))
}

let state ={
    score:0,
    wrongAnswer:0
}

function updateProblem(){
      state.currentProblem = generateProblem() 
      problemElement.innerHTML = `${state.currentProblem.numberOne}${state.currentProblem.operator}${state.currentProblem.numberTwo}`    
      ourField.value = ''
      ourField.focus();
    }

updateProblem()

function generateProblem(){
        return{
            numberOne:generateNumber(10),
            numberTwo:generateNumber(10),
            operator:['+', '-', 'x'][generateNumber(2)]
        }
}

ourForm.addEventListener('submit' , (e)=> 
{ e.preventDefault()
  let correctAnswer
  const p = state.currentProblem

  if(p.operator == '+') correctAnswer = p.numberOne + p.numberTwo
  if(p.operator == '-') correctAnswer = p.numberOne - p.numberTwo
  if(p.operator == 'x') correctAnswer = p.numberOne * p.numberTwo
  
  if(parseInt(ourField.value , 10) === correctAnswer){
       state.score++ 
       pointNeeded.innerHTML = 10 - state.score
       updateProblem()

    }else{
        state.wrongAnswer++
        mistakesAllowed.innerHTML = 2 - state.wrongAnswer
        updateProblem()
    }  
         checkLogic()  

})

function checkLogic(){
    //if you win
    if(state.score === 10)
    {
        alert('congrts , you win')
        startNewGame()
    }

    //if you lose
    if(state.wrongAnswer === 3){
        alert('you lost');
        startNewGame()
    }
}

function startNewGame(){
    updateProblem()
    state.score = 0
    state.wrongAnswer=0
    pointNeeded.textContent= 10;
    mistakesAllowed.textContent = 2;
}