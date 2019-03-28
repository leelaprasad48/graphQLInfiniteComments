import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Counter from './components/Counter';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {START_NEW_THREAD} from './components/Constants';
import { MockedProvider } from 'react-apollo/test-utils';
import ReactDOM from "react-dom";


configure({ adapter: new Adapter() });
describe('<App />', () => {
    const mocks = [
        {
            request: {
                query: START_NEW_THREAD,
                variables: {
                    parentId: 1,
                    inputName: 'Leela',
                    inputComment: 'something'
                },
            },
            result: {
                data: {
                    messages: { id: '1', name: 'Leela', content: 'something', comments: [] },
                },
            },
        },
    ];
    it('renders <Counter /> components', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Counter)).toHaveLength(1);
    });

    it('should render without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MockedProvider mocks={mocks}>
                <input />
            </MockedProvider>, div
        );
    });

    it('simulates click events', () => {
        const startNewThread = sinon.spy();
        const wrapper = shallow(<Counter/>);
        wrapper.find('.btn').simulate('click');
        expect(startNewThread).to.have.property('callCount', 1);
    });

});