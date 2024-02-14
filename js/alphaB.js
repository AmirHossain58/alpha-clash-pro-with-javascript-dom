function handleKeyboardKeyUpEvent(event){
    const playerPressed =event.key;


    // stop 
    if(playerPressed==='Escape'){
        gameOver()
    }

    const currentAlphabetElement =document.getElementById('current-alphabet');
    const expectedAlphabet =currentAlphabetElement.innerText.toLocaleLowerCase()

    if(playerPressed===expectedAlphabet){


        const currentScore= getTextElementValue('current-score')
        const updatedScore= currentScore +1;
        setTextElementValueById('current-score', updatedScore)
        // getTextElementValue('game-score');
      
        // console.log(14,gameScore);
        // gameScore.innerText=updatedScore
        // const currentElement =document.getElementById('current-score');
        // // const currentScoreText=currentElement.innerText
        // const currentScore=parseInt(currentElement.innerText)

        // const newScore = currentScore +1


        // currentElement.innerText=newScore
        removeBackgroundColorById(expectedAlphabet)
        continueGame()
    }
    else{
        const currentLife=getTextElementValue('current-life')
        const updatedLife=currentLife-1
        setTextElementValueById('current-life',updatedLife)
        if(updatedLife===0){
            gameOver()
        }
        // const currentElementsLife=document.getElementById('current-life')
        // const currentLife=parseInt(currentElementsLife.innerText)
        // const reduceLife=currentLife-1;
        // currentElementsLife.innerText=reduceLife
        // continueGame()
    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent)

function continueGame(){
    const alphabet= getRandomAlphabet()
    const currentAlphabet=document.getElementById('current-alphabet')
    currentAlphabet.innerText=alphabet
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementsById('home-section')
    hideElementsById('final-score')
    showElementsById('play-ground')
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame()
}
function gameOver(){
    hideElementsById('play-ground')
    showElementsById('final-score')
    const lastScore= getTextElementValue('current-score')
    setTextElementValueById('game-score',lastScore)
    const currentAlphabet=getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet)

}