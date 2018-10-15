import React, { Component } from 'react';

export class ImageSlider extends Component {
    state = {
        images: [
            'https://i.imgur.com/40chqac.jpg',
            'https://i.imgur.com/QCCJURL.jpg',
            'https://i.imgur.com/bbfEsah.jpg',
            'https://i.imgur.com/x0BXE5N.jpg',
        ],
        index: 0,
    };

    handleNav = value => {
        this.setState(
            {
                index: this.state.index + value,
            },
            () => {
                console.log('kallback');
            }
        );
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleNav(-1)}>Previous</button>
                <img
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    src={this.state.images[this.state.index]}
                    alt="whazzzap"
                />
                <button onClick={() => this.handleNav(1)}>Next</button>
            </div>
        );
    }
}
