import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:0;
  margin:0;
  list-style: none;
`;
export const GoodItem = styled.li`
  color: green;
  font-size: 18px;
  font-weight: 600;
  margin-bottom:10px;
`;
export const NeutralItem = styled.li`
  color: blue;
  font-size: 18px;
  font-weight: 600;
  margin-bottom:10px;
`;
export const BadItem = styled.li`
  color: red;
  font-size: 18px;
  font-weight: 600;
  margin-bottom:10px;
`;
export const Item = styled.li`
  color: black;
  font-size: 18px;
  font-weight: 600;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
