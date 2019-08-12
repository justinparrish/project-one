console.log('Please Save The Dog!')
//create variables letters, words, and hints for words
let letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const hangmanInfo = [
    {
        hint: '"Playing with my money... is like playing with my emotions"',
        answer: 'FRIDAY'
    },
    {
        hint: '"Did you rub your balls on my drums."',
        answer: 'STEP BROTHERS'
    },
    {
        hint: '"Aw, man, I shot Marvin in the face..."',
        answer: 'PULP FICTION'
    },
    {
        hint: '"I am McLovin"',
        answer: 'SUPERBAD'
    },
    {
        hint: '"Where did you get the name,"The Italian Stallion"?"',
        answer: 'ROCKY'
    },
    {
        hint: '"SAY HELLO TO MY LITTLE FRIEND!!"',
        answer: 'SCARFACE'
    },
    {
        hint: '"Don\'t you ever touch a black man\'s radio, boy! You can do that in China but you can get your 🤬 killed out here, man."',
        answer: 'RUSH HOUR'
    },
];

let start = hangmanInfo[Math.floor(Math.random() * hangmanInfo.length)]
$('.hint-text').text(start.hint)

console.log(start.answer.length)
let luckyGuesses = []
let hintAnswer = $('.placement').text(start.answer)
let lives = Number.parseFloat($('.lives').text())
let winScore = Number.parseFloat($('.win-score').text())
let loseScore = Number.parseFloat($('.lose-score').text())
let alphaLetters = $('.letters')
let numCorrect;
let space;
let guess;

console.log(Number.parseFloat($('.win-score').text()))
console.log(Number.parseFloat($('.lose-score').text()))
console.log(Number.parseFloat($('.lives').text()))

//create 26 divs to add to letter storage
// let storage = $('<button class="letters"></button>').text('');
for (let i = 0; i < letter.length; i++) {
    storage = $('<button class="letters"></button>').text(letter[i].valueOf());
    $('.letter-box').append(storage);
}

function gamePlay() {
    let wordHolder = $('.placement')
    let uList = $('<ul class="word"></ul>')
for(let i = 0; i < start.answer.length; i++) {
    let guess = $('<li class="guess"></li>')
    if(start.answer[i] === "-") {
        guess.html('-')
        space = 1
    }
    else {
        guess.html('_')
    }
    luckyGuesses.push(guess)
    wordHolder.append(uList)
    uList.append(guess)
}
}
gamePlay();

function life() {
    $('.lives')
    if (lives > 6) {
        swal('Aww you lose...Better luck next time')
    }
    for(let i = 0; i < luckyGuesses.length; i++) {
        if (numCorrect + space === luckyGuesses.length) {
            swal('Horaay! You saved Chester')
        }
    }
}

 function carMove() {
    let drive = Number.parseFloat($('.car').css('left')) - 42.5
    drive;

 }



//test for letter buttons
$('.letters').on('click', function clickedLetter() {
    // guess.html('.letters')
    this.click(null)
    for(let i = 0; i < start.answer.length; i++) {
        if(start.answer[i] === guess) {
            luckyGuesses[i].html(guess)
            numCorrect += 1
        }
    }
    let j = (start.answer.indexOf(guess))
    if (j === -1) {
        lives -= 1
        life()
        carMove()
    }
    else {
        life()
    }
})

//on click of new game button
$('.new-game').on('click', function newGame() {
    //randomize hints and words
    let start = hangmanInfo[Math.floor(Math.random() * hangmanInfo.length)];
    // console.log(start);
    //once hint is randomized place it inside of hint-display div
    $('.hint-text').text(start.hint)
    // $('.placement').text(start.answer)
    return gamePlay()
    console.log(start.answer)
    console.log(start.hint)
})



//hint button on click function
$('.hint').on('click', function hintbutton() {
    (swal('Think hard about movies in the 80s, 90s, and 2000s'));  
});