import React, { Component } from 'react';

import Autosuggest from './components/Autosuggest'

import hasData from './utils/hasData'

class App extends Component {
  state = {
    events: '',
  };

  componentDidMount() {
    fetch('https://www.iforbet.pl/BettingServices/LiveBettingServlet?action=getUpcomingLiveEvents&lang=PL&boundaryTime=5&_=1525774297492', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({events: data.events}))
  }

  render() {
    const { events } = this.state;
    return (
      hasData(events) &&
      <div>
        <Autosuggest events={events}/>
      </div>
    );
  }
}

export default App;
