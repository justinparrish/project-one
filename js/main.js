console.log('Please Save The Dog!')
//create variables letters, words, and hints for words
let letter = ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const hangmanInfo = [
    {
        hint : '"Playing with my money... is like playing with my emotions"',
        answer : 'FRIDAY'
    },
    {
        hint :'"Did you rub your balls on my drums."',
        answer : 'STEP BROTHERS'
    },
    {
        hint :'"Aw, man, I shot Marvin in the face..."',
        answer :'PULP FICTION'
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


let luckyGuess = []
let hintAnswer = $('.placement').text(start.answer)

let winScore = Number.parseInt($('.win-score').text())
let loseScore = Number.parseInt($('.lose-score').text())
let alphaKeys = $('.letters')

console.log(Number.parseInt($('.win-score').text()))
console.log(Number.parseInt($('.lose-score').text()))



// for(let i = 0, i < Object.keys())


//create 26 divs to add to letter storage
$(document).ready(function() {
    let storage = $('<button class="letters"></button>').text('');
    for (let i = 0; i < letter.length; i++) {
        storage = $('<button class="letters"></button>').text(letter[i].valueOf());
        $('.letter-box').append(storage);
    }
});

//hint button on click function
$('.hint').on('click', function hintbutton() {
    (swal('Think hard about movies in the 80s, 90s, and 2000s'));  
    console.log($('.letters:nth-child(3)').text())
});

//on click of new game button
$('.new-game').on('click', function newGame() {
    event.preventDefault()
    //randomize hints/and words
    let start = hangmanInfo[Math.floor(Math.random() * hangmanInfo.length)];
    console.log(start);
   
    
    //once hint is randomized place it inside of hint-display div
    $('.hint-text').text(start.hint)
    $('.placement').text(start.answer)
})


//determine if player won or lose depending on letters and length
function winOrLose() {
        //if user has correct answer
    if( hintAnswer == luckyGuess){
        //add 1 point for win
        winScore + 1;
        swal('Congratulations!! You Won!!');
    }
    else {
        //add 1 point to loss
        loseScore + 1;
        swal('Awww you lose🙁...Better Luck Next Time');
    }    

}
$('.letter').on('click', function selectLetter() {
    alert('clicked')
})

