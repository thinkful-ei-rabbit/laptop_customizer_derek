import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card.js suite', () => {
  it.skip ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders UI  test 1', () => {
    const tree = renderer
      .create(<Card title='cardTitle1' content='cardContent1' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('renders UI test 2', () => {
    const tree = renderer
      .create(<Card title='cardTitle2' content='cardContent2' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
