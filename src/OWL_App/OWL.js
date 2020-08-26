import React, { Component } from 'react';
import Participants from './Participants';
import Chat from './Chat';
import Stage from './Stage';


class OWL extends Component {
  static defaultProps = {
    id: 2,
    name: '',
    avatar: '',
    inSession: false,
    onStage: false,
  } 

  render(){
    const { store } = this.props;
    return (
      <main className='root'>

        <section className='participants'>
          {store.participants.map(par =>
            <Participants
              key={par.id}
              name={par.name}
              avatar={par.avatar}
              inSession={par.inSession}
              
            />
          )}
        </section>

        <Chat/>

        <section className='stage'>
          {store.participants.map(par => 
            <Stage
              key={par.id}
              name={par.name}
              avatar={par.avatar}
              onStage={par.inSession}
            />
          )}
        </section>
      </main>

    )
  }
  
}

export default OWL;