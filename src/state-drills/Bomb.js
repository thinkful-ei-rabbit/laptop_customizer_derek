import React, { Component } from 'react'

class Bomb extends Component {
  state ={
    count:0,
    display:'tick'
  }
  componentDidMount(){
    let interval = setInterval(()=>{
      this.setState({
        count: this.state.count +1
      })
      if(this.state.count >= 8) {
        this.setState({
          display: 'BOOOM!!!'
        })
        clearInterval(interval)
      } else if(this.state.display === 'tick'){
        this.setState({
          display: 'tock'
        })
      } else if(this.state.display === 'tock'){
        this.setState({
          display: 'tick'
        })
      }
    }, 1000)
  }
  render(){
    return (
      <div>
        <p>{this.state.display}</p>
      </div>
    )
  }

}

export default Bomb;