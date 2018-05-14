import React, { Component } from 'react'
import { List, ListEl } from './styled'

import ShowDetails from '../../components/ShowDetails'

class ShowInfo extends Component {
  state = {
    active: '',
  };

  handleSelectEvent = (val) => {
    this.setState({active: val})
  };

  render() {
    const { events } = this.props;
    const { active } = this.state;
    return (
      <div>
        <h4>Znalezione wydarzenia:</h4>
        <List>
          {events.map((item, i) => {
            return (
              <ListEl key={i} onClick={() => this.handleSelectEvent(i)}>
                {item.eventName}
                <ShowDetails show={active === i} event={item} />
              </ListEl>
            )
          })}
        </List>
      </div>
    )
  }
}

export default ShowInfo;