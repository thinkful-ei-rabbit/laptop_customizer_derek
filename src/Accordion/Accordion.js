import React, { Component } from 'react';

class Accordion extends Component {

  static defaultProps = {
    sections: []
  }

  state = {
    index: null,
    display:''
  }

  handleClick(index) {
    if (this.state.index !== index){
      this.setState({
        index: index,
        display: this.props.sections[index].content
      })
    } else {
      this.setState({
        index: null,
        display: ''
      })
    }
  }

  render() {
    const buttons = this.props.sections.map((section, index) => (
      <li>
        <button
        onClick={() => this.handleClick(index)}
        key={index}
        >
          {section.title}
        </button>
      </li>
    ))
    
    return <div>
      <ul>
        {buttons}
      </ul>
      <p>{this.state.display}</p>
    </div>
  }
}


export default Accordion;