import React, { Component } from 'react';
import logo from '../logo.svg';

export class Header extends Component {
    render() {
        const title = this.props.title;
        const num = this.props.num;
        const obj = this.props.myObj;
        const arr = this.props.myArr;
        const func = this.props.myFunc;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">{title}</h1>
                <div>{num}</div>
                <div>{func(1, 2)}</div>
                <div>{JSON.stringify(arr)}</div>
                <div>{JSON.stringify(obj)}</div>
            </header>
        );
    }
}
