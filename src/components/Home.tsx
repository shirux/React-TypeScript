import * as React from 'react';

class Home extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Daniel Ramos</h1>
                    <h2>Using TypeScript and React to test my skills</h2>
                    <p className="lead text-muted">For testing this app, you should type in the URL the next paths:</p>
                    <ul className="text-muted list-items">
                        <li><span className="focus">/focusable-input</span> to test two different inputs</li>
                        <li><span className="focus">/voting-list/:candidates</span> where candidates is a number you define. Display a list of candidates with random info</li>
                        <li><span className="focus">/register-form</span> to test a register form and API consumption</li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Home;