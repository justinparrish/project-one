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
        answer: 'STEPBROTHERS'
    },
    {
        hint: '"Aw, man, I shot Marvin in the face..."',
        answer: 'PULPFICTION'
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
        answer: 'RUSHHOUR'
    },
];




let winScore = parseInt($('.win-score').html())
let loseScore = parseInt($('.lose-score').html())
let alphaLetters = $('.letters')
let wins;
let loses;
let numCorrect;
let space;
let luckyGuesses = []
let guess;
let lives;
let myLives = $('.lives')

console.log(winScore)

let start = hangmanInfo[Math.floor(Math.random() * hangmanInfo.length)]

//create 26 divs to add to letter storage
const letters = () => {
    let storage = $('.letter-storage')
    let listedAlpha = $('<ul class="alphabet"></ul>')

    for (let i = 0; i < letter.length; i++) {
        let letterElem = $('<button id="letters"></button>')
        $(letterElem).html(letter[i])
        $(letterElem).click((evnt) => {
            let guess = $(letterElem).html()
            $(letterElem).attr('class', 'active')
            $(letterElem).click(null)
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
        $(storage).append(listedAlpha)
        $(listedAlpha).append(letterElem)
    }
}

//guess lines
const gamePlay = () => {
    let wordHolder = $('.placement')
    let word = $('<ul id="word"></ul>')
    for (let i = 0; i < start.answer.length; i++) {
        guess = $('<li class="guess"></li>')
        if (start.answer[i] === "-") {
            guess.html('-')
            space = 1
        }
        else {
            guess.html('_')
        }
        luckyGuesses.push(guess)
        wordHolder.append(word)
        word.append(guess)
        console.log(start.answer)
    }
}

//life tracker
const life = () => {
    myLives.html(lives)
    if (lives < 1) {
        swal('Aww you lose...Better luck next time') 
        $('.lose-score').html(loseScore += 1)
    }
    for (let i = 0; i < luckyGuesses.length; i++) {
        if (numCorrect + space === luckyGuesses.length) {
            swal('Horaay! You saved Chester')
            $('.win-score').html(winScore += 1)
        }
    }
}

//car animaation
const carMove = () => {
    if(lives === 6) {
        $('.car').css({'left' : '435px'})
    }
    else if(lives === 5) {
        $('.car').css({'left' : '385px'})
    } 
    else if(lives === 4) {
        $('.car').css({'left' : '336px'})
    } 
    else if(lives === 3) {
        $('.car').css({'left' : '288px'})
    } 
    else if(lives === 2) {
        $('.car').css({'left' : '235px'})
    } 
    else if(lives === 1) {
        $('.car').css({'left' : '210px'})
    } 
    else if(lives === 0) {
        $('.game-display').css({'background-image' : 'url(images/barking.gif)'})
        $('.car').css({'display': 'none'})
        $('.dog').css({'display': 'none'})
        

    } 
    console.log('VROOM VROOM')
}


//start of game
const play = () => {
    start;
    $('.hint-text').text(start.hint)
    letters()

    luckyGuesses = []
    lives = 6
    numCorrect = 0
    space = 0
    
    gamePlay()
    life()
    console.log(luckyGuesses)
}
play()
carMove()

//hint button on click function
$('.hint').on('click', function hintbutton() {
    (swal('Think hard about movies in the 80s, 90s, and 2000s'));
});