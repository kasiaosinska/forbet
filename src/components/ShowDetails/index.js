import React from 'react'
import { List, ListEl, Label, Value } from './styled'

const convertDate = (val) => {
  let date = new Date(val);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' };
  return date.toLocaleDateString('pl-PL', options)
};

const ShowDetails = (props) =>
  <List show={props.show}>
    <ListEl>
      <Label>Rodzaj:</Label>
      <Value>{props.event.sportName}</Value>
    </ListEl>
    <ListEl>
      <Label>Data:</Label>
      <Value>{convertDate(props.event.eventStart)}</Value>
    </ListEl>
    <ListEl>
      <Label>Wynik:</Label>
      <Value>{props.event.score}</Value>
    </ListEl>
    <ListEl>
      <Label>Aktualnie trwa:</Label>
      <Value>{props.event.running ? <span>Tak</span> : <span>Nie</span>}</Value>
    </ListEl>
  </List>;

export default ShowDetails;