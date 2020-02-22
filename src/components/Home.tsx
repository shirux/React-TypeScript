import * as React from 'react';

class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Daniel Ramos</h1>
                <h2>Using TypeScript and React to test my skills</h2>
                <p>For testing this app, you should type in the URL the next paths:</p>
                <ul>
                    <li>/focusable-input to test two different inputs</li>
                    <li>/voting-list/:candidates where candidates is a number you define. Display a list of candidates with random info</li>
                    <li>/register-form to test a register form and API consumption</li>
                </ul>
            </div>
            
        )
    }
}

export default Home;