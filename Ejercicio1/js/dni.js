class dni{
    letters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E'];
    dniChecker(input){
        if (!(/([0-9]{8}[a-zA-Z])/.test(input) && (input.length === 9))) {
            console.log("Incorrect input, please introduce a valid format.");
        } else if ((input.replace(/[0-9]/g, '').toUpperCase() === this.letters[input.replace(/[a-zA-Z]/, '')%23])) {
            console.log("Everything is correct!");
        } else {
            console.log("Letter and number doesn't match, your DNI is not correct.");
        }
    }
}
export {dni};