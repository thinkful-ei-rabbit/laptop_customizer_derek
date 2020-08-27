import React, { Component } from 'react';
import STORE from './STORE'
import List from './List'
import './Styles/App.css';

class App extends Component {
  state = {
    store: STORE
  }

  handleAddItem = (listId) => {
    console.log('add item pressed for List:', listId);
    
    const newRandomCard = () => {      
      const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }

    console.log(this.state);

    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return  {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        }
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]:newCard
        }
      }
    })
  }

  

  handleDelete = (cardId) => {
    console.log('delete item pressed for Card:', cardId)

    const { lists, allCards } = this.state.store;
    
    const newLists = lists.map(list => {
      return {
        ...list,
        cardIds: list.cardIds.filter(id => id !== cardId)
      }
    })
    console.log(newLists)

    function omit(obj, keyToOmit) {
      let {[keyToOmit]: _, ...rest} = obj;
      return rest;
    }

    const newCards = omit(allCards, cardId)

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  }

  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              listId={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              handleAddItem={this.handleAddItem}
              handleDelete={this.handleDelete}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;