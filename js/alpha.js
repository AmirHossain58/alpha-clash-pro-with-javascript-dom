// function play(){
//     const homeSection =document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     const playGround =document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function continueGame(){
    const alphabet= getRandomAlphabet()
    const currentAlphabet=document.getElementById('current-alphabet');
    currentAlphabet.innerText=alphabet;

    // 
    setBackgroundColorById(alphabet)
}
function play(){
    hideElementById('home-section')
    showElementById('play-ground')
   continueGame()
}