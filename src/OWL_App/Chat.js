import React, { Component } from 'react';
import STORE from './OWL_STORE'
import ChatEvent from './ChatEvent'

class Chat extends Component {

  render(){
    const comments = STORE.chatEvents.map(event => {
      let par = STORE.participants.find(par => par.id === event.participantId);
      event.name = par.name;
      event.avatar = par.avatar;
      if (!event.message) event.message = '';
      return event;
    })
    return (
      <section className='chat'>
        {comments.map((com, index) =>
          <ChatEvent
          key={index}
          name={com.name}
          avatar={com.avatar}
          type={com.type}
          message={com.message}
          timestamp={com.timestamp}
          />
        )}
      </section>
    )
  }
}

export default Chat;