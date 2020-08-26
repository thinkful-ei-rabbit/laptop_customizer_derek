import React from 'react';

export default function Stage(props) {
  return props.onStage === false ? '' : (
    <section className = 'on-stage' >
      <h2>{props.name}</h2>
      <img href={props.avatar} alt="pic" />
    </section>
  )
}