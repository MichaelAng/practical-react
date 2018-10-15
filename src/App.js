import React, { Component } from 'react';
import './App.css';
import { TodoList, TodoHeader } from './components/todo-list';

const initialTasks = [
    {
        id: 0,
        complete: false,
        description: '1',
    },
];

class App extends Component {
    state = {
        tasks: initialTasks,
        task: '',
        taskIndex: 1,
        filterState: 'all',
        isSetAllComplete: true,
    };

    handleTaskChange = value => {
        this.setState({
            task: value,
        });
    };

    handleTaskSubmit = () => {
        const task = {
            id: this.state.taskIndex,
            description: this.state.task,
            complete: false,
        };

        this.setState({
            taskIndex: this.state.taskIndex + 1,
            tasks: [...this.state.tasks, task],
            task: '',
        });
    };

    handleCompleteClick = id => {
        const tasks = this.state.tasks.map(task => {
            return task.id !== id ? task : { ...task, complete: !task.complete };
        });

        this.setState({
            tasks,
        });
    };

    handleDeleteClick = id => {
        const newTasks = this.state.tasks.filter(task => task.id !== id);

        this.setState({
            tasks: newTasks,
        });
    };

    handleFilterClick = filterState => {
        this.setState({
            filterState,
        });
    };

    handleDeleteAllClick = () => {
        const tasks = this.state.tasks.filter(task => !task.complete);

        this.setState({
            tasks,
        });
    };

    handleCompleteAllClick = () => {
        const isSetAllComplete = this.state.isSetAllComplete;
        const tasks = this.state.tasks.map(task => ({ ...task, complete: isSetAllComplete }));

        this.setState({
            tasks,
            isSetAllComplete: !isSetAllComplete,
        });
    };

    render() {
        let tasks = this.state.tasks;
        const filterState = this.state.filterState;

        if (filterState === 'active' || filterState === 'complete') {
            tasks = tasks.filter(
                task => (filterState === 'active' ? !task.complete : task.complete)
            );
        }

        const filters = ['all', 'active', 'complete'].map(type => {
            return (
                <button key={type} onClick={() => this.handleFilterClick(type)}>
                    {type}
                </button>
            );
        });

        const displayDeleteAll = this.state.tasks.some(task => task.complete) ? (
            <button onClick={this.handleDeleteAllClick}>Delete All Complete</button>
        ) : (
            ''
        );

        return (
            <div className="App">
                <TodoHeader
                    task={this.state.task}
                    onTaskChange={this.handleTaskChange}
                    onTaskSubmit={this.handleTaskSubmit}
                />
                <div>
                    <span>Filters:</span>
                    {filters}
                </div>
                <div>
                    <button onClick={this.handleCompleteAllClick}>
                        {this.state.isSetAllComplete ? '[ ]' : '[X]'}
                    </button>
                    {displayDeleteAll}
                </div>
                <TodoList
                    tasks={tasks}
                    onCompleteClick={id => this.handleCompleteClick(id)}
                    onDeleteClick={id => this.handleDeleteClick(id)}
                />
            </div>
        );
    }
}

export default App;
