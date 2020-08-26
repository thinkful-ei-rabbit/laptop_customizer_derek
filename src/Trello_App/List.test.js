import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './STORE'

describe ( 'My List', () => {
    it.skip('List renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
      const testUI = renderer
      .create(<List 
          key='KeyID 1' 
          header='Header test 1' 
          cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]}
        />)
      .toJSON();
      expect(testUI).toMatchSnapshot();
    });
});