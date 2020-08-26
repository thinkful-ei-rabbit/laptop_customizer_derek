import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Accordion from './Accordion'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]


describe('Accordion test suite', () =>{

  it.skip('Snap 1', () => {
    const tree = renderer
    .create(<Accordion />)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it.skip('Snap 2', () => {
    const tree = renderer
    .create(<Accordion sections={[
      {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
      }
    ]}/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it.skip('opens any clicked section', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('Snap 4', () => {
    const wrapper = shallow(<Accordion sections={sectionsProp} />)
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
})