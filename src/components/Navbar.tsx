import * as React from 'react';

import { Link } from 'react-router-dom';

import randomFunctions from '../util/functions';

class Navbar extends React.Component<any, any> {

    constructor (props: any) {
        super(props);
        this.state = {
            randomCandidateNumber: randomFunctions.generateNumber(1, 20)
        }

    }

    render () {
        return(
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <Link to={'/'} className='navbar-brand'>Daniel Ramos</Link>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/'}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'/focusable-input'}>Inputs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={`/voting-list/${this.state.randomCandidateNumber}`}>Candidates</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to={'register-form'}>Form</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Navbar