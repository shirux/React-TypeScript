import * as React from 'react';

class VotingList extends React.Component<any, IVotingListState> {

    constructor(props: any){
        super(props);
        this.state = {
            candidates: this.generateCandidates()
        };
    }

    generateCandidates(): ICandidate[] {
        let candidates: ICandidate[] = []
        let amountCandidates = parseInt(this.props.match.params.candidates);
        for(let i = 0; i < amountCandidates; i++) {
            let newCandidate = this.generateRandomCandidate();
            candidates = [...candidates, newCandidate];
        }
        return candidates;
    }
    
    generateRandomCandidate() {
        let candidate: ICandidate = {
            firstName: this.generateRandomString(1),
            lastName: this.generateRandomString(1),
            age: this.generateRandomNumber(18,100),
            slogan: this.generateRandomString(10),
            votes: this.generateRandomNumber(0,10)
        }
        return candidate;
    }

    generateRandomString(words: number): string{
        let characters = 'abcdefghijklmnopqrstuvwxyz';
        let result: string = '';
        let amountOfLetters: number = this.generateRandomNumber(2,10);
        for (let i = 0; i < amountOfLetters; i++) {
            let randomLetter: number = this.generateRandomNumber(0, characters.length-1);
            result += characters[randomLetter]; 
        }
        words--;
        if (words > 0) {
            result += ' ' + this.generateRandomString(words);
        }
        return result;
    }

    /**
     * Return a random number between min and max (both included)
     * @param min min value accepted in the range
     * @param max max value accepted in the range
     */
    generateRandomNumber(min: number, max: number): number{
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    render() {
        return(
            <div className="candidate-list">
                <h1>VotingList TODO</h1>
                <ul>
                    <h2>{this.props.match.params.candidates}</h2>
                </ul>
                
            </div>
            
        );
    }
}

interface IVotingListState {
    candidates: ICandidate[]
}

interface ICandidate {
    firstName: string,
    lastName: string,
    age: number,
    slogan: string,
    votes: number
}
export default VotingList;