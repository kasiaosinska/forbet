import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 25px;
  padding: 0 5px;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
  font-size: 14px;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
  border: ${props => props.hasData && '1px solid lightgray'};
  box-sizing: border-box;
  font-size: 14px;
`;

export const ListEl = styled.li`
  height: 25px;
  line-height: 25px;
  padding: 5px;
  
  &:hover {
    background-color: darkgray;
  }
`;