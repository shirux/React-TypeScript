import * as React from 'react';

import { ITask } from './Task';

import TaskForm from './TaskForm';
import TaskList from './TaskList';
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
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav> 
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addNewTask={this.addNewTask.bind(this)}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <TaskList 
                                    tasks={this.state.tasks}
                                    deleteTask={this.deleteTask.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
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