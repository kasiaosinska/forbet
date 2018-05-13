import React, { Component } from 'react'
import { Wrapper, Input, List, ListEl, Button } from './styled'

const searchCriteria = ['eventName', 'categoryName', 'sportName'];

class Autosuggest extends Component {
  state = {
    events: '',
    value: '',
    list: [],
  };

  componentDidMount() {
    this.setState({list: []});
    fetch('https://www.iforbet.pl/BettingServices/LiveBettingServlet?action=getUpcomingLiveEvents&lang=PL&boundaryTime=5&_=1525774297492', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => this.setState({events: data.events}))
  }

  handleChange = (e) => {
    this.setState({value: e.target.value, list: []}, () => {
      let filteredList = [];
      this.state.events.forEach(event => {
        searchCriteria.forEach(criteria => {
          if(event[criteria].toLowerCase().includes(this.state.value.toLowerCase())) {
            if(!(filteredList.includes(event[criteria]))){
              filteredList.push(event[criteria])
            }
          }
        })
      });
      if(this.state.value !== '') {
        this.setState({ list: filteredList });
      }
    });
  };

  renderList = () =>
    <List hasData={this.state.list.length > 0}>
      {this.state.list.map((item, i) =>
        <ListEl key={i}>{item}</ListEl>
      )}
    </List>;

  render() {
    return(
      <Wrapper>
        <Input
          type="text"
          name="value"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder='Szukaj...'
        />
        <Button type="submit">Szukaj</Button>
        {this.renderList()}
      </Wrapper>
    )
  }
}

export default Autosuggest;