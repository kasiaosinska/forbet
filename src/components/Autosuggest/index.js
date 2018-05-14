import React, { Component } from 'react'
import { array } from 'prop-types'
import ShowInfo from '../ShowEvents'
import { Wrapper, Input, List, ListEl } from './styled'

const searchCriteria = ['eventName', 'categoryName', 'sportName'];

class Autosuggest extends Component {
  static propTypes = {
    events: array.isRequired,
  };

  static defaultProps = {
    events: [],
  };

  state = {
    events: [],
    filteredEvents: [],
    value: '',
    list: [],
    confirm: false,
  };

  componentDidMount() {
    this.setState({events: this.props.events, list: [], confirm: false});
  }

  handleChange = (e) => {
    this.setState({value: e.target.value, list: [], filteredEvents: []}, () => {
      let filteredList = [];
      this.state.events.forEach(event => {
        searchCriteria.forEach(criteria => {
          if(event[criteria].toLowerCase().includes(this.state.value.toLowerCase())) {
            if(!filteredList.includes(event[criteria])){
              filteredList.push(event[criteria]);
            }
          }
        })
      });
      if(this.state.value !== '') {
        this.setState({ list: filteredList });
      }
    });
  };

  handleConfirm = (val) => {
    this.setState({value: val, confirm: true, list: []});
    const list = [];
    this.state.events.forEach(event => {
      for (let k in event) {
        if (!event.hasOwnProperty(k)) continue;
        if (event[k] === val) {
          list.push(event)
        }
      }
      this.setState({filteredEvents: list})
    })
  };

  renderList = () =>
    <List hasData={this.state.list.length > 0}>
      {this.state.list.map((item, i) =>
        <ListEl key={i} onClick={() => this.handleConfirm(item)}>{item}</ListEl>
      )}
    </List>;

  render() {
    const { value, confirm, filteredEvents } = this.state;
    return(
      <Wrapper>
        <Input
          type="text"
          name="value"
          value={value}
          onChange={this.handleChange}
          placeholder='Szukaj...'
        />
        {this.renderList()}
        {confirm && <ShowInfo events={filteredEvents} />}
      </Wrapper>
    )
  }
}

export default Autosuggest;