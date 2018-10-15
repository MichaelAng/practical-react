import React, { Component } from 'react';

export class TodoHeader extends Component {
    handleTaskChange = e => {
        this.props.onTaskChange(e.target.value);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onTaskSubmit();
    };

    render() {
        const task = this.props.task;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id="task" type="text" value={task} onChange={this.handleTaskChange} />
                </form>
            </div>
        );
    }
}

class TodoItem extends Component {
    render() {
        const description = this.props.description;
        const id = this.props.taskId;
        const isComplete = this.props.isComplete;

        return (
            <div>
                <button onClick={() => this.props.onClick(id)}>{isComplete ? '[X]' : '[ ]'}</button>
                <span>{description}</span>
                <button onClick={() => this.props.onClick(id, true)}>Delete</button>
            </div>
        );
    }
}

export class TodoList extends Component {
    handleClick = (id, isDelete) => {
        isDelete ? this.props.onDeleteClick(id) : this.props.onCompleteClick(id);
    };

    render() {
        const tasks = this.props.tasks;

        const tasksView = tasks.map(task => {
            return (
                <li key={task.id}>
                    <TodoItem
                        taskId={task.id}
                        isComplete={task.complete}
                        description={task.description}
                        onClick={this.handleClick}
                    />
                </li>
            );
        });

        return <ul>{tasksView}</ul>;
    }
}
