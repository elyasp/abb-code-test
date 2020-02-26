import styled from "styled-components";

export const DemoFeatures = styled.div `
  padding: 10px;
  margin: 0 4em;
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Header = styled.nav `
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
  background-color: #0040a6;
  font-size: 1.3em;
  color: white;
  margin-bottom: 2em;
`;

export const Button = styled.button `
  padding: 1em;
  background-color: grey;
  color: white;
  border: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const TextBox = styled.div `
  padding: 10px;
  margin: 0 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  max-height: 700px;
`;