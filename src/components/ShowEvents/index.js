import React, { Component } from 'react'
import { array } from 'prop-types'
import { List, ListEl } from './styled'

import ShowDetails from '../../components/ShowDetails'

class ShowEvents extends Component {
  static propTypes = {
    events: array.isRequired,
  };

  state = {
    selected: null,
  };

  componentWillReceiveProps() {
    this.setState({ selected: null });
  }

  handleSelectEvent = index => () => {
    this.setState({ selected: index });
  };

  render() {
    const { events } = this.props,
      { selected } = this.state;

    return events.length > 0 ? (
      <div>
        <h4>Znalezione wydarzenia:</h4>
        <List>
          {events.map((event, index) => {
            return (
              <ListEl key={index} onClick={this.handleSelectEvent(index)}>
                {event.eventName}
                <ShowDetails show={selected === index} event={event}/>
              </ListEl>
            )
          })}
        </List>
      </div>
    ) : null;
  }
}

export default ShowEvents;