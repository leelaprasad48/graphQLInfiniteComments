import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import { Counter } from './Counter';

const mocks = [
    // Provide mocks here to test
];

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
                <MockedProvider addTypename={false} mocks={mocks}>
                    <Counter />
                </MockedProvider>, div
    );
    ReactDOM.unmountComponentAtNode(div);
});
