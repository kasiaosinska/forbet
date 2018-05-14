import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 20px;
`;

export const Input = styled.input`
  width: 500px;
  height: 35px;
  padding: 0 5px;
  text-decoration: none;
  outline: none;
  font-size: inherit;
  box-sizing: border-box;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 500px;
  border: 1px solid lightgray;
  box-sizing: border-box;
`;

export const ListEl = styled.li`
  height: 25px;
  line-height: 25px;
  padding: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: darkgray;
  }
`;