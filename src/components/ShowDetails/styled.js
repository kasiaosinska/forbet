import styled from 'styled-components'

export const List = styled.ul`
  display: ${props => props.show ? 'block' : 'none'}
  padding: 3px;
`;

export const ListEl = styled.li`
  list-style-type: none;
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #a7a9ac;
  margin: 5px;
`;

export const Value = Label.extend`
  color: #0f1112;
  margin-left: 5px;
`;