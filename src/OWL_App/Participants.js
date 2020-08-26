import React from 'react';

export default function Participants(props) {

  let status = (props.onStage === true ? 'On Stage' : 'In Session')

  return props.inSession === false ? '' : (
    <section className = 'participant' >
      <h2>{props.name}</h2>
      <img href={props.avatar} alt="pic" />
      <p>{status}</p>
    </section>
  )
}