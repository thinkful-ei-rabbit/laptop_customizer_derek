import React, { Component } from 'react';
import FEATURES from './STORE'
import Header from './Header';
import MainForm from './main__form/MainForm';
import MainSummary from './main__summary/MainSummary';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: FEATURES.Processor[0],
      'Operating System': FEATURES["Operating System"][0],
      'Video Card': FEATURES["Video Card"][0],
      Display: FEATURES.Display[0]
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = FEATURES[feature][newValue];

    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header />
        <main>
          <MainForm
            features={FEATURES}
            dollarFormat={USCurrencyFormat}
            handleUpdate={this.updateFeature}
            selected={this.state.selected}
          />
          <MainSummary
            selected={this.state.selected}
            dollarFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;