import React, { Component } from 'react';

export class FetchRandomUser extends Component {
    state = {
        person: null,
        loading: true,
    };

    async componentDidMount() {
        const url = 'https://api.randomuser.me/?results=5';
        const response = await fetch(url);
        const data = await response.json();
        const people = data.results;

        this.setState({
            people,
            loading: false,
        });
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.people.length) {
            return <div>No Person</div>;
        }

        const peopleJsx = this.state.people.map(person => (
            <div key={person.login.uuid}>
                <div>{person.name.title}</div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <img src={person.picture.large} />
            </div>
        ));

        return <div>{peopleJsx}</div>;
    }
}
