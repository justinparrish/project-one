console.log('Please Save The Dog!')
//create object of letters, words, and hints for words
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
    ]
console.log(hangmanInfo.hints)
console.log(hangmanInfo.letter)



//create 26 divs to add to letter storage
//1. create 26 divs
$(document).ready(function() {
    let storage = $('<button class="letters"></button>').text('');
    //2. iterate through array
    for (let i = 0; i < letter.length; i++) {
        //3. add letters of array into empty divs
        storage = $('<button class="letters"></button>').text(letter[i].valueOf());
        $('.letter-box').append(storage);
    }
});


//on click of new game button
$('.new-game').on('click', function newGame() {
    event.preventDefault()
    //1. randomize hints/and words
    let start = hangmanInfo[Math.floor(Math.random() * hangmanInfo.length)];
    //let answer = hangmanInfo.words[Math.floor(Math.random() * hangmanInfo.words.length)];
    
    console.log(start);
    
    
    //2. once hint is randomized place it inside of hint-display div
    $('.hint-text').text(start);
   
      
})



//on click of letter move it to the play-area div
function clickLetter() {


    
}
//on click of reset-play-area button
function resetGameButton() {
    let reset = $('.reset-play-area');


}
//hint button on click function
$('.hint').on('click', function hintbutton() {
    swal('Think hard about movies in the 80s, 90s, and 2000s');  
    
})

//determine if player won or lose depending on letters and length
function winOrLose() {
    if(answer == hangmanInfo.words[i]) {

    }
}







