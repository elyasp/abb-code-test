import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  display: flex;
`;

export const Header = styled.nav`
  display: flex;
  height: 10vh;
  justify-content: space-around;
  align-items: center;
  background-color: #0040a6;
  font-size: 1.3em;
  color: white;
  margin-bottom: 2em;
`;

export const Button = styled.button`
  padding: 1em;
  background-color: grey;
  color: white;
  border: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;
