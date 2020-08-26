import React, { Component } from 'react';

class RouletteGun extends Component {

  state = {
    spinning: false,
    chamber: null,
    display: 'Spin the chamber . . .'
  }

  safe() {
    this.setState({
      display: 'Yer safe'
    })
  }
  
  dead() {
    this.setState({
      display: 'BANG Yer dead'
    })
  }

  handleClick() {
    this.setState({
      chamber: Math.ceil(Math.random() * 8)
    })
    this.setState({
      display: 'Spinning the chamber . . .'
    })
    setTimeout(() => {
      this.state.chamber === this.props.bullet ? this.dead() : this.safe()
    }, 2000)
    
  }

  render() {
    return <div>
      <p>{this.state.display}</p>
      <button onClick={() => this.handleClick()}>Pull trigger . . .</button>
    </div>
  }
}

export default RouletteGun;