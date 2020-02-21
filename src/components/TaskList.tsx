import * as React from 'react';

import { ITask } from './Task';

class TaskList extends React.Component<ITaskListProps, any> {

    render(): JSX.Element[] {
        return this.props.tasks.map((task: ITask, i: number) => {
            return (
                <div className="col-md-4 mt-2" key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button 
                        onClick={() => this.props.deleteTask(task.id)}
                        className="btn btn-danger btn-block">
                        Delete
                    </button>
                </div>
            )
        }) ;
    }

}

interface ITaskListProps {
    tasks: ITask[];
    deleteTask: (id: number) => void;
}

export default TaskList;