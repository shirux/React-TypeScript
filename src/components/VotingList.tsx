import * as React from 'react';

import Candidate from './Candidate';
import randomFunctions from '../util/functions';

class VotingList extends React.Component<any, IVotingListState> {

    constructor(props: any){
        super(props);
        this.state = {
            candidates: this.generateCandidates()
        };
    }

    componentDidMount() {
        let candidates = this.state.candidates;
        candidates.sort((a,b) => {
            if(a.votes > b.votes) {
                return -1
            } else if(a.votes === b.votes) {
                if (a.age > b.age) {
                    return -1;
                }
            }
        })
            
      }

    generateCandidates(): ICandidate[] {
        let candidates: ICandidate[] = []
        let amountCandidates = parseInt(this.props.match.params.candidates);
        for(let i = 0; i < amountCandidates; i++) {
            let newCandidate = this.generateRandomCandidate(i);
            candidates = [...candidates, newCandidate];
        }
        return candidates;
    }
    
    generateRandomCandidate(id: number) {
        let candidate: ICandidate = {
            id: id,
            firstName: randomFunctions.generateString(1),
            lastName: randomFunctions.generateString(1),
            age: randomFunctions.generateNumber(18,100),
            slogan: randomFunctions.generateString(10),
            votes: randomFunctions.generateNumber(0,10)
        }
        return candidate;
    }


    render() {
        return(
            <div className='candidate-list'>
                <section className='jumbotron text-center'>
                    <div className='container'>
                        <h1>Welcome to the candidate list</h1>
                        <p className='lead text-muted'>In this list you can find in detail all the candidate in each card. It is ordered by the amount of votes they have</p>
                    </div>
                </section>
                <div className="container">
                    <ul>
                    {
                        this.state.candidates.map(candidate => {
                            return (
                                    <Candidate
                                        firstName={candidate.firstName}
                                        lastName={candidate.lastName}
                                        age={candidate.age}
                                        slogan={candidate.slogan}
                                        votes={candidate.votes}
                                        key={candidate.id}
                                />    
                            );
                                    
                        })
                    }
                    </ul>
                </div>
            </div>
            
        );
    }
}

interface IVotingListState {
    candidates: ICandidate[]
}

interface ICandidate {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    slogan: string,
    votes: number
}
export default VotingList;