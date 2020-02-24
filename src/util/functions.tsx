let randomFunctions = {
    generateString: (words: number): string => {
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let result: string = '';
        let amountOfLetters: number = randomFunctions.generateNumber(2,10);
        for (let i = 0; i < amountOfLetters; i++) {
            let randomLetter: number = randomFunctions.generateNumber(0, characters.length-1);
            result += characters[randomLetter]; 
        }
        words--;
        if (words > 0) {
            result += ' ' + randomFunctions.generateString(words);
        }
        return result;
    },
    generateNumber: (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
}



/**
 * Return a random number between min and max (both included)
 * @param min min value accepted in the range
 * @param max max value accepted in the range
 */


export default randomFunctions;