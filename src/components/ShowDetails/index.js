import React from 'react'
import { List, ListEl, Label, Value } from './styled'

const convertDate = (rawDate) => {
  const date = new Date(rawDate),
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('pl-PL', options)
};

const ShowDetails = (props) => {
  const { show, event: { sportName, eventStart, score, running }} = props;

  return show ? (
    <List>
      <ListEl>
        <Label>Rodzaj:</Label>
        <Value>{sportName}</Value>
      </ListEl>
      <ListEl>
        <Label>Data:</Label>
        <Value>{convertDate(eventStart)}</Value>
      </ListEl>
      <ListEl>
        <Label>Wynik:</Label>
        <Value>{score}</Value>
      </ListEl>
      <ListEl>
        <Label>Aktualnie trwa:</Label>
        <Value>{running ? 'Tak' : 'Nie'}</Value>
      </ListEl>
    </List>
  ) : null;
};

export default ShowDetails;