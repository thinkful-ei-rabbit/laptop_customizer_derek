import React, { Component } from 'react';

class HelloWorld extends Component {

  state = {
    who: ''
  }

  handleClick(name) {
    console.log(name);
    this.setState({
      who: name
    })
  }

  render() {
    return <div>
        <p>Hello {this.state.who}</p>
        <button onClick={() => this.handleClick('World')}>World</button>
        <button onClick={() => this.handleClick('Friend')}>Friend</button>
        <button onClick={() => this.handleClick('React')}>React</button>
      </div>
    ;
  }
}

export default HelloWorld;