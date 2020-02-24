import * as React from 'react';

import { ITask } from './Task';
import Home from './Home';
import FocusInput from './FocusInput';
import VotingList from './VotingList';
import Form from './Form';
import Navbar from './Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends React.Component<IProps, IState> {

    constructor (props: IProps) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    addNewTask(task: ITask) {
        this.setState({
            tasks: [...this.state.tasks, task]
        }, () => console.log(this.state.tasks));
    }

    deleteTask(id: number) {
        const tasks: ITask[] = this.state.tasks.filter(
            (task: ITask) => task.id !== id
        );
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            <div>
                 <Router>
                 <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/focusable-input" component={FocusInput}/>
                        <Route path="/voting-list/:candidates" component={VotingList}/>
                        <Route path="/register-form" component={Form}/>
                    </Switch>
                </Router>
            </div>
           
        )
    }
}

interface IProps {
    title: string;
}

interface IState {
    tasks: ITask[];
}