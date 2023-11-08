import React from 'react';
import { AddNewTask } from './addTask';
import { ToDoAppList } from './appList';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { task: props.task };
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    updateList(text) {
        var updatedTasks = this.state.task;
        updatedTasks.unshift(text);
        this.setState({ task: updatedTasks });
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(text) {
        var updatedTasks = this.state.task;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({ task: updatedTasks });
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks) {
        console.log('Tasks updated');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

    render() {
        return (
            <div>
                <h1>ToDo APP</h1>
                <AddNewTask updateList={this.updateList} />
                <ToDoAppList task={this.state.task} remove={this.removeTask} />
            </div>
        );
    }
}
