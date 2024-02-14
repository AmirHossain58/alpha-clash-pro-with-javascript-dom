function hideElementsById(elementId){
    const GetElement =document.getElementById(elementId)
    GetElement.classList.add('hidden')
}
function showElementsById(elementId){
    const GetElement =document.getElementById(elementId)
    GetElement.classList.remove('hidden')
}
function setBackgroundColorById(elementId){
    const GetElement =document.getElementById(elementId)
    GetElement.classList.add('bg-orange-400')
}
function removeBackgroundColorById(elementId){
    const GetElement =document.getElementById(elementId)
    GetElement.classList.remove('bg-orange-400')
}
function getTextElementValue(elementId){
    const element=document.getElementById(elementId);
    const value=parseInt(element.innerText)
    return value
}
function getElementTextById(elementId){
    const element=document.getElementById(elementId)
    const text =element.innerText;
    return text
}
function setTextElementValueById(elementId,value){
    const element=document.getElementById(elementId);
    element.innerText=value
}
function getRandomAlphabet(){
    const alphabetString='abcdefghijklmnopqrstuvwxyz'
    const alphabets =alphabetString.split('')
    const index =Math.round(Math.random()*25)
    const alphabet=alphabets[index]
    return alphabet
}