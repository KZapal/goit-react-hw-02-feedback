import React from 'react';
import Statistics from './Statistics/Statistics';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Statistics
        options={options}
        onLeaveFeedback={this.onLeaveFeedback}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    );
  }
}

export default App;
