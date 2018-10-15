import React, { Component } from 'react';

const initialState = {
    name: '',
    email: '',
    password: '',
    nameError: '',
    emailError: '',
    passwordError: '',
};

export class ValidationForm extends Component {
    state = initialState;

    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.validate()) {
            console.log(this.state);
            this.setState(initialState);
        }
    };

    validate = () => {
        let nameError = '';
        let emailError = '';
        let passwordError = '';

        if (!this.state.name) {
            nameError = 'name cannot be blank';
        }

        if (!this.state.email.includes('@')) {
            emailError = 'invalid email';
        }

        if (emailError || nameError) {
            this.setState({ emailError, nameError });
            return false;
        }

        return true;
    };

    render() {
        const name = this.state.name;
        const nameError = this.state.nameError;

        const email = this.state.email;
        const emailError = this.state.emailError;

        const password = this.state.password;
        const passwordError = this.state.passwordError;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input id="name" placeholder="name" value={name} onChange={this.handleChange} />
                    <div style={{ fontSize: 12, color: 'red' }}>{nameError}</div>
                </div>
                <div>
                    <input id="email" placeholder="email" value={email} onChange={this.handleChange} />
                    <div style={{ fontSize: 12, color: 'red' }}>{emailError}</div>
                </div>
                <div>
                    <input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <div style={{ fontSize: 12, color: 'red' }}>{passwordError}</div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}
