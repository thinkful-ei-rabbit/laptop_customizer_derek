import React, { Component } from 'react';
import Card from './Card'
import './styles/List.css';

class List extends Component {
  static defaultProps = {
    props: {
      key: '',
      header: '',
      cards: [],
    }
  };

  render() {
    const props = this.props;
    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{props.header}</h2>
        </header>
        <div className='List-cards'>
          {props.cards.map((card) =>
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
            />
          )}
          <button
            type='button'
            className='List-add-button'
          >
            + Add Random Card
          </button>
        </div>
      </section>
    )
  }
}

export default List