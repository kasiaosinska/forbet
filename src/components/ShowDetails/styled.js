import styled from 'styled-components'

export const List = styled.ul`
  cursor: default;
  padding: 15px 3px;
`;

export const ListEl = styled.li`
  list-style-type: none;
  padding: 2px 0;
`;

export const Label = styled.span`
  font-weight: 400;
  color: #a7a9ac;
  margin: 5px;
`;

export const Value = Label.extend`
  color: #0f1112;
  margin-left: 5px;
`;