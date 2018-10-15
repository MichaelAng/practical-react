import React, { Component } from 'react';

export class Counter extends Component {
    render() {
        const count = this.props.count;
        return (
            <div>
                <div>count: {count}</div>
                <button onClick={this.props.increment}>Increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        );
    }
}
