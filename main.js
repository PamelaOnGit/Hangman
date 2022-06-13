const hiddenWord = document.getElementById('hiddenword');
const playBtn = document.getElementById('play'); 
const wrongLetters = document.getElementById('wrongletters');
const showLives = document.getElementById('livescontainer'); 
const numLives = document.getElementById('lives'); 
const winLoseContainer = document.getElementById('winlosecontainer'); 
const instructions = document.getElementById('instructions'); 
const alphabet = document.getElementById('alphabet'); 
const livesContainer = document.getElementById('livescontainer'); 



const aButton = document.getElementById('a'); 
const bButton = document.getElementById('b'); 
const cButton = document.getElementById('c');
const dButton = document.getElementById('d');
const eButton = document.getElementById('e');
const fButton = document.getElementById('f');
const gButton = document.getElementById('g');
const kButton = document.getElementById('k');
const oButton = document.getElementById('o');
const tButton = document.getElementById('t');
const uButton = document.getElementById('u');
const wButton = document.getElementById('w');


const wordSelection = ['cat', 'bat', 'dog', 'cow', 'duck', 'goat', 'toad']
let randomNum = Math.floor(Math.random() * wordSelection.length); 
let word = wordSelection[randomNum]; 
let wordArray = Array.from(word); 
let lives = 5; 


function play() { 
        for (i=0; i<wordArray.length; i++){
        let hiddenLetter = document.createElement('span'); 
        hiddenLetter.setAttribute('id', `sp${i}`);
        hiddenLetter.innerHTML = '?'; 
        hiddenWord.appendChild(hiddenLetter); 
    } 
    playBtn.style.display = 'none';
    showLives.style.display = 'block';  
}; 

playBtn.addEventListener('click', play); 

function aPress(){ 
    aButton.style.display = 'none';  
    if(!word.includes('a')){ 
        lives = lives - 1;  
        let aWrong = document.createElement('span'); 
        aWrong.innerHTML = 'a'; 
        wrongLetters.appendChild(aWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('a')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'a'){
            let aCorrect = document.getElementById(`sp${i}`); 
            aCorrect.innerHTML = 'a';             
            }
        }   
    }    
};  
aButton.addEventListener('click', aPress) 

function bPress(){  
    bButton.style.display = 'none'; 
    if(!word.includes('b')){ 
        lives = lives - 1;  
        let bWrong = document.createElement('span'); 
        bWrong.innerHTML = 'b'; 
        wrongLetters.appendChild(bWrong); 
    } 
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none';
        winLoseContainer.style.display = 'block'; 
    }
    for(i=0; i<wordArray.length; i++){
        if (wordArray[i] === 'b'){
            let bCorrect = document.getElementById(`sp${i}`); 
            bCorrect.innerHTML = 'b';             
        }
    } 
     
};  
bButton.addEventListener('click', bPress) 

function cPress(){
    cButton.style.display = 'none'; 
    if(!word.includes('c')){ 
        lives = lives -1; 
        let cWrong = document.createElement('span'); 
        cWrong.innerHTML = 'c'; 
        wrongLetters.appendChild(cWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    for(i=0; i<wordArray.length; i++){ 
        if (wordArray[i] === 'c'){
            let cCorrect = document.getElementById(`sp${i}`); 
            cCorrect.innerHTML = 'c'; 
        }
    }
    numLives.innerHTML = lives; 
}; 
cButton.addEventListener('click', cPress); 

function dPress(){  
    dButton.style.display = 'none'; 
    if(!word.includes('d')){ 
        lives = lives - 1;  
        let dWrong = document.createElement('span'); 
        dWrong.innerHTML = 'd'; 
        wrongLetters.appendChild(dWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    for(i=0; i<wordArray.length; i++){
        if (wordArray[i] === 'd'){
            let dCorrect = document.getElementById(`sp${i}`); 
            dCorrect.innerHTML = 'd';             
        }
    } 
    numLives.innerHTML = lives; 
};  
dButton.addEventListener('click', dPress) 

function ePress(){ 
    eButton.style.display = 'none';  
    if(!word.includes('e')){ 
        lives = lives - 1;  
        let eWrong = document.createElement('span'); 
        eWrong.innerHTML = 'e'; 
        wrongLetters.appendChild(eWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('e')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'e'){
            let eCorrect = document.getElementById(`sp${i}`); 
            eCorrect.innerHTML = 'e';             
            }
        }   
    }    
};  
eButton.addEventListener('click', ePress) 

function fPress(){ 
    fButton.style.display = 'none';  
    if(!word.includes('f')){ 
        lives = lives - 1;  
        let fWrong = document.createElement('span'); 
        fWrong.innerHTML = 'f'; 
        wrongLetters.appendChild(fWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('f')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'f'){
            let fCorrect = document.getElementById(`sp${i}`); 
            fCorrect.innerHTML = 'f';             
            }
        }   
    }    
};  
fButton.addEventListener('click', fPress) 

function gPress(){ 
    gButton.style.display = 'none';  
    if(!word.includes('g')){ 
        lives = lives - 1;  
        let gWrong = document.createElement('span'); 
        gWrong.innerHTML = 'g'; 
        wrongLetters.appendChild(gWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('g')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'g'){
            let gCorrect = document.getElementById(`sp${i}`); 
            gCorrect.innerHTML = 'g';             
            }
        }   
    }    
};  
gButton.addEventListener('click', gPress) 

function kPress(){ 
    kButton.style.display = 'none';  
    if(!word.includes('k')){ 
        lives = lives - 1;  
        let kWrong = document.createElement('span'); 
        kWrong.innerHTML = 'k'; 
        wrongLetters.appendChild(kWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('k')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'k'){
            let kCorrect = document.getElementById(`sp${i}`); 
            kCorrect.innerHTML = 'k';             
            }
        }   
    }    
};  
kButton.addEventListener('click', kPress) 

function tPress(){ 
    tButton.style.display = 'none';  
    if(!word.includes('t')){ 
        lives = lives - 1;  
        let tWrong = document.createElement('span'); 
        tWrong.innerHTML = 't'; 
        wrongLetters.appendChild(tWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('t')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 't'){
            let tCorrect = document.getElementById(`sp${i}`); 
            tCorrect.innerHTML = 't';             
            }
        }   
    }    
};  
tButton.addEventListener('click', tPress) 

function oPress(){ 
    oButton.style.display = 'none';  
    if(!word.includes('o')){ 
        lives = lives - 1;  
        let oWrong = document.createElement('span'); 
        oWrong.innerHTML = 'o'; 
        wrongLetters.appendChild(oWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('o')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'o'){
            let oCorrect = document.getElementById(`sp${i}`); 
            oCorrect.innerHTML = 'o';             
            }
        }   
    }    
};  
oButton.addEventListener('click', oPress) 






function uPress(){ 
    uButton.style.display = 'none';  
    if(!word.includes('u')){ 
        lives = lives - 1;  
        let uWrong = document.createElement('span'); 
        uWrong.innerHTML = 'u'; 
        wrongLetters.appendChild(uWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('u')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'u'){
            let uCorrect = document.getElementById(`sp${i}`); 
            uCorrect.innerHTML = 'u';             
            }
        }   
    }    
};  
uButton.addEventListener('click', uPress) 

function wPress(){ 
    wButton.style.display = 'none';  
    if(!word.includes('w')){ 
        lives = lives - 1;  
        let wWrong = document.createElement('span'); 
        wWrong.innerHTML = 'w'; 
        wrongLetters.appendChild(wWrong); 
    }
    if (lives>0){
        numLives.innerHTML = lives; 
    }else{
        instructions.style.display = 'none'; 
        alphabet.style.display = 'none'; 
        livesContainer.style.display = 'none'; 
        wrongLetters.style.display = 'none'; 
        winLoseContainer.style.display = 'block'; 
    }
    if(word.includes('w')){
        for(i=0; i<wordArray.length; i++){
            if (wordArray[i] === 'w'){
            let wCorrect = document.getElementById(`sp${i}`); 
            wCorrect.innerHTML = 'w';             
            }
        }   
    }    
};  
wButton.addEventListener('click', wPress) 



