import React from 'react'
import PropTypes from 'prop-types'
import { List, ListEl, Label, Value } from './styled'

const convertDate = (rawDate) => {
  const date = new Date(rawDate),
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('pl-PL', options)
};

const ShowDetails = ({ show, event: { sportName, eventStart, score, running }}) => {

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

ShowDetails.propTypes = {
  show: PropTypes.bool,
  sportName: PropTypes.string,
  score: PropTypes.string,
  running: PropTypes.string,
  eventStart: PropTypes.string,
};

ShowDetails.defaultProps = {
  show: false,
  sportName: null,
  score: null,
  running: null,
  eventStart: null,
};

export default ShowDetails;