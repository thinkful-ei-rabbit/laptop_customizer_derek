import React, { Component } from 'react';
import Card from './Card'
import './Styles/List.css';

class List extends Component {

  render() {
    const props = this.props;
    // console.log(props);
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
          {props.cards.map((card) =>{
            // console.log(card);
            return <Card
              key={card.id}
              cardId={card.id}
              title={card.title}
              content={card.content}
              handleDelete={props.handleDelete}
            />}
          )}
          <button
            type='button'
            className='List-add-button'
            onClick={() => props.handleAddItem(props.listId)}
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List