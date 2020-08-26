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
                  <div className='Participants-list'>
                      {store.participants.map(par => 
                      if (par.inSession === true) 
                      )}
                      <Participants store={store.participants.map
                      (par => par.inSession === true)}
                    />
                    

                  </div>
  
              </section>
              <section className='chat'>
                    <Chat store={store} />
              </section>
              <section className='stage'>
                {store.participants.map(par => {
                    <Stage
                      key={par.id}
                      name={par.name}
                      avatar={par.avatar}
                      inSession={par.inSession}
                  />}
                )}
              </section>
            </main>

        )
    }
    
}