import React, { Component } from 'react';

export class MyForm extends Component {
    state = {
        name: '',
        favoritePet: '',
        rememberMe: false,
        title: 'Mrs.',
    };

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        const name = this.state.name;
        const favoritePet = this.state.favoritePet;
        const rememberMe = this.state.rememberMe;
        const title = this.state.title;
        return (
            <form onSubmit={this.handleSubmit}>
                <input id="name" value={name} onChange={this.handleChange} />
                <textarea id="favoritePet" value={favoritePet} onChange={this.handleChange} />
                <input id="rememberMe" type="checkbox" checked={rememberMe} onChange={this.handleChange} />
                <select id="title" value={title} onChange={this.handleChange}>
                    <option>Mr.</option>
                    <option>Miss.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                </select>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
