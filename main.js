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
const hButton = document.getElementById('h'); 
const iButton = document.getElementById('i'); 
const jButton = document.getElementById('j');
const kButton = document.getElementById('k');
const lButton = document.getElementById('l');
const mButton = document.getElementById('m');
const nButton = document.getElementById('n');
const oButton = document.getElementById('o');
const pButton = document.getElementById('p');
const qButton = document.getElementById('q');  
const rButton = document.getElementById('r'); 
const sButton = document.getElementById('s'); 
const tButton = document.getElementById('t');
const uButton = document.getElementById('u');
const vButton = document.getElementById('v'); 
const wButton = document.getElementById('w');
const xButton = document.getElementById('x'); 
const yButton = document.getElementById('y'); 
const zButton = document.getElementById('z'); 

let alphs = ['a', 'b', 'c' ,'d' ,'e' ,'f' ,'g', 'h', 'i', 'j', 'k','l','m','n','o','p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y','z']; 


const wordSelection = ['fox', 'panther', 'elephant', 'worm', 'snail', 'hedgehog', 'aardvark', 'antelope', 'cheetah', 'warthog', 'bear', 'panda', 'penguin', 'pig', 'zebra', 'lion', 'tiger', 'lizard','deer', 'donkey', 'ant', 'bird', 'fish', 'cat', 'bat', 'dog', 'cow', 'duck', 'goat', 'toad', 'bee', 'gecko','goose', 'owl', 'badger']
//const wordSelection = ['zoo', 'ozz', 'eze']; 
//const wordSelection = ['pig']; 
let randomNum = Math.floor(Math.random() * wordSelection.length); 
let word = wordSelection[randomNum]; 
let wordArray = Array.from(word); 
let lives = 5; 

// resets game when the 'play again' button is clicked after a win or loss notification
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
    hiddenWord.style.color = 'black'; 
    alphabet.style.display = 'block'; 

    function resetAlphabetButton(alph){ 
        let alphButton = document.getElementById(alph); 
        alphButton.style.display = 'inline'; 
        alphButton.style.backgroundColor = 'beige';
    }
    

    for (i=0;i<alphs.length; i++){ 
        resetAlphabetButton(alphs[i]); 
    }

    randomNum = Math.floor(Math.random() * wordSelection.length); 
    word = wordSelection[randomNum]; 
    wordArray = Array.from(word); 

    play();     
}
playAgain.addEventListener('click', resetGame); 

// after every letter choice is made, tests whether the player has guessed all the letters correctly and thereby won the game
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
       hiddenWord.style.color = 'green';
       alphabet.style.display = 'none'; 
       livesContainer.style.display = 'none'; 
       winLoseMessage.innerHTML = `You got it!`
       winLoseContainer.style.display = 'block';

    }
    playAgain.addEventListener('click', function(){
        console.log('playAgain function works');
    })
}

// is called when player chooses any letter, tests whether that letter is incorrect, changes button color to pink
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

// is called when player chooses any letter, tests whether that letter is correct and fills in correct letter in the hidden animal word
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


//call the functions whenever player clicks on a letter
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

function hPress(){
    correctLetter('h'); 
    incorrectLetter('h'); 
    win(); 
}

function iPress(){
    correctLetter('i'); 
    incorrectLetter('i'); 
    win(); 
}

function jPress(){
    correctLetter('j'); 
    incorrectLetter('j'); 
    win(); 
}

function kPress(){ 
    correctLetter('k'); 
    incorrectLetter('k'); 
    win(); 
}

function lPress(){ 
    correctLetter('l'); 
    incorrectLetter('l'); 
    win(); 
}

function mPress(){ 
    correctLetter('m'); 
    incorrectLetter('m'); 
    win(); 
}

function nPress(){ 
    correctLetter('n'); 
    incorrectLetter('n'); 
    win(); 
}

function oPress(){ 
    correctLetter('o'); 
    incorrectLetter('o'); 
    win(); 
}

function pPress(){ 
    correctLetter('p'); 
    incorrectLetter('p'); 
    win(); 
}

function qPress(){
    correctLetter('q'); 
    incorrectLetter('q'); 
    win(); 
}

function rPress(){ 
    correctLetter('r'); 
    incorrectLetter('r'); 
    win(); 
}

function sPress(){
    correctLetter('s'); 
    incorrectLetter('s'); 
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

function vPress(){
    correctLetter('v'); 
    incorrectLetter('v'); 
    win(); 
}


function wPress(){ 
    correctLetter('w');
    incorrectLetter('w'); 
    win(); 
}

function xPress(){
    correctLetter('x'); 
    incorrectLetter('x'); 
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


// selects a random animal word from the wordSelection list, converts to spans _ to hide the letters, adds event listeners for the alphabet buttons
function play() { 

    for (i=0; i<wordArray.length; i++){
    let hiddenLetter = document.createElement('span'); 
    hiddenLetter.setAttribute('id', `sp${i}`);
    hiddenLetter.innerHTML = '_'; 
    hiddenWord.appendChild(hiddenLetter); 
} 

aButton.addEventListener('click', aPress, {once: true}); 
bButton.addEventListener('click', bPress, {once: true}); 
cButton.addEventListener('click', cPress, {once: true}); 
dButton.addEventListener('click', dPress, {once: true}); 
eButton.addEventListener('click', ePress, {once: true}); 
fButton.addEventListener('click', fPress, {once: true}); 
gButton.addEventListener('click', gPress, {once: true}); 
hButton.addEventListener('click', hPress, {once: true}); 
iButton.addEventListener('click', iPress, {once: true}); 
jButton.addEventListener('click', jPress, {once: true}); 
kButton.addEventListener('click', kPress, {once: true}); 
lButton.addEventListener('click', lPress, {once: true});
mButton.addEventListener('click', mPress, {once: true}); 
nButton.addEventListener('click', nPress, {once: true});
oButton.addEventListener('click', oPress, {once: true}); 
pButton.addEventListener('click', pPress, {once: true}); 
qButton.addEventListener('click', qPress, {once: true}); 
rButton.addEventListener('click', rPress, {once: true});
sButton.addEventListener('click', sPress, {once: true}); 
tButton.addEventListener('click', tPress, {once: true}); 
uButton.addEventListener('click', uPress, {once: true});
vButton.addEventListener('click', vPress, {once: true}); 
wButton.addEventListener('click', wPress, {once: true}); 
xButton.addEventListener('click', xPress, {once: true}); 
yButton.addEventListener('click', yPress, {once: true}); 
zButton.addEventListener('click', zPress, {once: true}); 


playBtn.style.display = 'none';
instructions.style.display = 'none'; 
showLives.style.display = 'block';  
}; 
playBtn.addEventListener('click', play); 









