import * as React from 'react';

import { ITask } from './Task'; 

class TaskForm extends React.Component<ITaskFormProps, any> {

    constructor(props: ITaskFormProps) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
    }

    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: ITask = {
            id: this.getCurrentTimestamp(),
            title: this.state.title,
            description: this.state.description,
            completed: false
        };
        this.props.addNewTask(newTask);
        this.setState({
            title: '',
            description: ''
        });
        
    }

    getCurrentTimestamp(): number {
        return new Date().getTime();
    }

    handleInputChange (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
        
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            name="title"
                            onChange={e => this.handleInputChange(e)}
                            className="form-control" 
                            placeholder="Task Title"
                            value={this.state.title}
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            name="description"
                            onChange={e => this.handleInputChange(e)}
                            placeholder="Task Description"
                            value={this.state.description}
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-block">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

interface ITaskFormProps {
    addNewTask: (task: ITask) => void;
}

interface ITaskFormState {
    title: string,
    description: string
}

export default TaskForm;