import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import renderer from 'react-test-renderer';

describe('Message component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Message />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<Message name="Messages" unread={4} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders the UI as expected with no unreads', () => {
        const tree = renderer
            .create(<Message name="Messages" unread={0} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});