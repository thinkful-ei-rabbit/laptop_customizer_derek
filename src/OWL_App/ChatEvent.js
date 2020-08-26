import React from 'react';

export default function ChatEvents(props) {

  let chatEvent = props.message;
  let emoji = '';

  // Pseudo-Code, according to props.type ==> chatEvent = {event-type} 
  if (props.type === 'thumbs-up') {
    chatEvent = 'thumbs-up';
    emoji = 'fa icon';
  }
  if (props.type === 'thumbs-down') {
    chatEvent = 'thumbs-down';
    emoji = 'fa icon';
  }
  if (props.type === 'raise-hand') {
    chatEvent = 'raise-hand';
    emoji = 'fa icon';
  }
  if (props.type === 'clap') {
    chatEvent = 'clap';
    emoji = 'fa icon';
  }
  if (props.type === 'join') {
    chatEvent = 'join';
    emoji = 'fa icon';
  }
  if (props.type === 'leave') {
    chatEvent = 'leave';
    emoji = 'fa icon';
  }
  if (props.type === 'join-stage') {
    chatEvent = 'join-stage';
    emoji = 'fa icon';
  }
  if (props.type === 'leave-stage') {
    chatEvent = 'leave-stage';
    emoji = 'fa icon';
  }

  // Pseudo-Code, figure out formatting later 
  // const time = new Date(props.timestamp);

  if (props.type === 'message') {
    return (
      <section className='comment-event' >
        <div className='chat-name'>
          <img href={props.avatar} alt="pic" />
          <h3>{props.name}</h3>
          <p>{props.timestamp}</p>
        </div>
        <div className='comment'>
          <p>{chatEvent}</p>
        </div>
      </section>
    )
  } else {
    return (
      <section className='emoji-event' >
          <h4>{props.name}</h4>
          <p>{chatEvent}</p>
          <i className={emoji}></i>
      </section>
    )
  }
}