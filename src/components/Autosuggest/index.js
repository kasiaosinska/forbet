import React, { Component } from 'react'
import { array } from 'prop-types'
import { Wrapper, Input, List, ListEl } from './styled'
import ShowEvents from "../ShowEvents/index";

const searchCriteria = ['eventName', 'categoryName', 'sportName'];

class Autosuggest extends Component {
  static propTypes = {
    events: array.isRequired,
  };

  state = {
    filteredEvents: [],
    value: '',
    filteredList: [],
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value, filteredList: [], filteredEvents: [] }, () => {
      const { value } = this.state,
        { events } = this.props,
        filteredList = [];

      events.forEach(event => {
        searchCriteria.forEach(criteria => {
          if (event[criteria].toLowerCase().includes(value.toLowerCase())) {
            if (!filteredList.includes(event[criteria])){
              filteredList.push(event[criteria]);
            }
          }
        })
      });

      if(value) {
        this.setState({ filteredList });
      }
    });
  };

  handleSelect = value => () => {
    const filteredEvents = [];

    this.setState({ value, filteredList: [] });
    this.props.events.forEach(event => {
      for (let k in event) {
        if (!event.hasOwnProperty(k)) continue;
        if (event[k] === value) {
          filteredEvents.push(event)
        }
      }
      this.setState({ filteredEvents })
    })
  };

  renderList = () => {
    const { filteredList } = this.state;

    if (filteredList.length > 0) {
      return (
        <List>
          {filteredList.map((item, index) =>
            <ListEl key={index} onClick={this.handleSelect(item)}>{item}</ListEl>
          )}
        </List>
      );
    }
  };

  render() {
    const { value, filteredEvents } = this.state;

    return(
      <Wrapper>
        <Input
          type="text"
          name="filter"
          value={value}
          onChange={this.handleChange}
          placeholder="Szukaj..."
        />
        {this.renderList()}
        <ShowEvents events={filteredEvents} />
      </Wrapper>
    )
  }
}

export default Autosuggest;