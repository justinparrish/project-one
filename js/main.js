console.log('Please Save The Dog!')
//create object of letters, words, and hints for words
const hangmanInfo = {
    // add alphabet(come up with an easier to list them)
    //use charCode()
    letter: String.fromCharCode(66),
    words: ['Friday', 'Step Brothers', 'Pulp Fiction'],
    hints: ['"Playing with my money... is like playing with my emotions"', '"Did you rub your balls on my drums."',
        "Aw, man, I shot Marvin in the face..."],



}
console.log(hangmanInfo.hints[1])
console.log(letter)
//create 26 divs to add to letter storage
//1. create 26 divs and add letter to them
for (let i = 0; i <= 26; i++) {
    let letterDiv = $('<div></div>')
    //2. add the divs to the letter storage
    $('.letter-storage').append(letterDiv)
    $(letterDiv).addClass('alpha')
}



//create input inside of play area



//create function to be able to drag letter to solve a word

