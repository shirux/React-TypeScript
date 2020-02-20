import * as React from 'react';

import { ITask } from './Task'; 

class TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {

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
            id: 1,
            title: '',
            description: '',
            completed: false
        };
        //this.props.addNewTask();

    }

    handleInputChange (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
        console.log(e.target);
    }

    render() {
        return (
            <div className="card card-body">
                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            onChange={e => this.handleInputChange(e)}
                            className="form-control" 
                            placeholder="Task Title"
                        />
                    </div>
                    <div className="form-group">
                        <textarea 
                            className="form-control"
                            onChange={e => this.handleInputChange(e)}
                            placeholder="Task Description">
                        </textarea>
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