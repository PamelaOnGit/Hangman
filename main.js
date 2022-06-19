const hiddenWord = document.getElementById('hiddenword');
const playBtn = document.getElementById('play'); 
const wrongLetters = document.getElementById('wrongletters');
const showLives = document.getElementById('livescontainer'); 
const numLives = document.getElementById('lives'); 
const winLoseContainer = document.getElementById('winlosecontainer'); 
const winLoseMessage = document.getElementById('winlosemessage'); 
const instructions = document.getElementById('instructions'); 
const alphabet = document.getElementById('alphabet'); 
const livesContainer = document.getElementById('livescontainer'); 
const playAgain = document.getElementById('playagain'); 

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
const yButton = document.getElementById('y'); 
const zButton = document.getElementById('z'); 

const wordSelection = ['cat', 'bat', 'dog', 'cow', 'duck', 'goat', 'toad', 'bee', 'gecko']
//const wordSelection = ['zoo', 'ozz', 'eze']; 
//const wordSelection = ['cow']; 
let randomNum = Math.floor(Math.random() * wordSelection.length); 
let word = wordSelection[randomNum]; 
let wordArray = Array.from(word); 
let lives = 5; 

function resetGame(){ 
    for (i=0;i<word.length; i++){ 
        let eachLetter = document.getElementById(`sp${i}`); 
        hiddenWord.removeChild(eachLetter); 
    }; 

    instructions.innerHTML = 'Choose a letter and guess the animal!';

    lives = 5; 
    numLives.innerHTML = lives; 
    livesContainer.style.display = 'block'; 

    winLoseContainer.style.display = 'none'; 
    
    instructions.style.display = 'block'; 
    hiddenWord.style.display = 'inline'; 
    alphabet.style.display = 'block'; 

    aButton.style.display = 'inline'; 
    aButton.style.backgroundColor = 'beige'; 
    bButton.style.display = 'inline';
    bButton.style.backgroundColor = 'beige';
    cButton.style.display = 'inline'; 
    cButton.style.backgroundColor = 'beige'; 
    dButton.style.display = 'inline'; 
    dButton.style.backgroundColor = 'beige'; 
    eButton.style.display = 'inline'; 
    eButton.style.backgroundColor = 'beige'; 
    fButton.style.display = 'inline'; 
    fButton.style.backgroundColor = 'beige'; 
    gButton.style.display = 'inline'; 
    gButton.style.backgroundColor = 'beige'; 
    kButton.style.display = 'inline'; 
    kButton.style.backgroundColor = 'beige'; 
    oButton.style.display = 'inline'; 
    oButton.style.backgroundColor = 'beige'; 
    tButton.style.display = 'inline';
    tButton.style.backgroundColor = 'beige';
    uButton.style.display = 'inline';
    uButton.style.backgroundColor = 'beige'; 
    wButton.style.display = 'inline'; 
    wButton.style.backgroundColor = 'beige'; 
    yButton.style.display = 'inline'; 
    yButton.style.backgroundColor = 'beige'; 
    zButton.style.display = 'inline'; 
    zButton.style.backgroundColor = 'beige'; 

    wrongLetters.style.display = 'block'; 

    randomNum = Math.floor(Math.random() * wordSelection.length); 
    word = wordSelection[randomNum]; 
    wordArray = Array.from(word); 

    play();     
}
playAgain.addEventListener('click', resetGame); 

function win(){ 
    let winArray = []; 
    for (i=0; i<word.length; i++){
    let winLetter = document.getElementById(`sp${i}`).innerHTML;   
    winArray.push(winLetter);   
    }
    console.log(winArray); 
    console.log(wordArray); 
    if (winArray.join() === wordArray.join()){ 
       instructions.style.display = 'none'; 
       hiddenWord.style.display = 'none'; 
       alphabet.style.display = 'none'; 
       livesContainer.style.display = 'none'; 
       //wrongLetters.style.display = 'none'; 
       winLoseMessage.innerHTML = `That's right - ${word} - You got it!`
       winLoseContainer.style.display = 'block';

    }
    playAgain.addEventListener('click', function(){
        console.log('playAgain function works');
    })
}

function incorrectLetter(alph){ 
    if (!word.includes(alph)){ 
        let alphButton = document.getElementById(alph); 
        alphButton.style.backgroundColor = 'pink'; 
        lives = lives - 1; 
        if (lives > 0){ 
            numLives.innerHTML = lives; 
        }else{
            instructions.style.display = 'none'; 
            alphabet.style.display = 'none'; 
            livesContainer.style.display = 'none'; 
            wrongLetters.style.display = 'none'; 
            winLoseMessage.innerHTML = 'You lose this time - try again!'
            winLoseContainer.style.display = 'block'; 
        }
    }
}

function correctLetter(alph) { 
    if (word.includes(alph)){
        for (i=0; i<word.length; i++){ 
            if (wordArray[i] === alph){
                let alphCorrect = document.getElementById(`sp${i}`); 
                alphCorrect.innerHTML = alph; 
            }
        }
    }
}

function aPress(){ 
    correctLetter('a'); 
    incorrectLetter('a'); 
    win(); 
}


function bPress(){ 
    correctLetter('b'); 
    incorrectLetter('b'); 
    win(); 
}


function cPress() {
    correctLetter('c'); 
    incorrectLetter('c'); 
    win(); 
}


function dPress(){ 
    correctLetter('d'); 
    incorrectLetter('d'); 
    win(); 
}


function ePress(){ 
    correctLetter('e'); 
    incorrectLetter('e'); 
    win(); 
}


function fPress(){
    correctLetter('f'); 
    incorrectLetter('f'); 
    win(); 
}


function gPress(){
    correctLetter('g'); 
    incorrectLetter('g'); 
    win(); 
}

function kPress(){ 
    correctLetter('k'); 
    incorrectLetter('k'); 
    win(); 
}


function oPress(){ 
    correctLetter('o'); 
    incorrectLetter('o'); 
    win(); 
}


function tPress(){ 
    correctLetter('t'); 
    incorrectLetter('t'); 
    win(); 
}


function uPress(){ 
    correctLetter('u'); 
    incorrectLetter('u'); 
    win(); 
}


function wPress(){ 
    correctLetter('w');
    incorrectLetter('w'); 
    win(); 
}


function yPress() { 
    correctLetter('y'); 
    incorrectLetter('y'); 
    win(); 
}


function zPress() { 
    correctLetter('z'); 
    incorrectLetter('z'); 
    win(); 
}

function play() { 

    for (i=0; i<wordArray.length; i++){
    let hiddenLetter = document.createElement('span'); 
    hiddenLetter.setAttribute('id', `sp${i}`);
    hiddenLetter.innerHTML = '?'; 
    hiddenWord.appendChild(hiddenLetter); 
} 

aButton.addEventListener('click', aPress, {once: true}); 
bButton.addEventListener('click', bPress, {once: true}); 
cButton.addEventListener('click', cPress, {once: true}); 
dButton.addEventListener('click', dPress, {once: true}); 
eButton.addEventListener('click', ePress, {once: true}); 
fButton.addEventListener('click', fPress, {once: true}); 
gButton.addEventListener('click', gPress, {once: true}); 
kButton.addEventListener('click', kPress, {once: true}); 
oButton.addEventListener('click', oPress, {once: true}); 
tButton.addEventListener('click', tPress, {once: true}); 
uButton.addEventListener('click', uPress, {once: true}); 
wButton.addEventListener('click', wPress, {once: true}); 
yButton.addEventListener('click', yPress, {once: true}); 
zButton.addEventListener('click', zPress, {once: true}); 


playBtn.style.display = 'none';
instructions.style.display = 'none'; 
showLives.style.display = 'block';  
}; 
playBtn.addEventListener('click', play); 









