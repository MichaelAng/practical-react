import React from 'react';

export default props => (
    <div>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            {props.text}
        </a>
    </div>
);

export const Body2 = () => <div>hi</div>;
