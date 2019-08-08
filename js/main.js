console.log('Please Save The Dog!')
//create object of letters, words, and hints for words
let letters = [];
const hangmanInfo = {
    // add alphabet(come up with an easier to list them)
    //use charCode()
    letter: ['A', 'B', 'C', 'D', 'E', 'F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    words: ['Friday', 'Step Brothers', 'Pulp Fiction', 'Superbad','Rocky','Scarface', 'Rush Hour'],
    hints: ['"Playing with my money... is like playing with my emotions"', '"Did you rub your balls on my drums."','"Aw, man, I shot Marvin in the face..."','"I am McLovin"','"Where did you get the name,"The Italian Stallion"?"','"SAY HELLO TO MY LITTLE FRIEND!!"', '"Don\'t you ever touch a black man\'s radio, boy! You can do that in China but you can get your ass killed out here, man."']



}
console.log(hangmanInfo.hints[1])
console.log(hangmanInfo.letter)

//create 26 divs to add to letter storage
//1. create 26 divs
$(document).ready(function () {
    let storage = $('<div class="letters"></div>').text('a');
    for (let i = 0; i < hangmanInfo.letter.length; i++) {
        storage = $('<div class="letters"></div>').text([i]);
        $('.letter-box').append(storage);
    }
});






//create input inside of play area



//create function to be able to drag letter to solve a word

