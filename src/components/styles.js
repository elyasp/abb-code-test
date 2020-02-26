import styled from "styled-components";

export const TableWrap = styled.div `
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 10px;

`;

export const Wrap = styled.div `
`;


export const TableHead = styled.div `
  display: flex;
  flex-direction: column;
`;
export const FeatureHead = styled.div `
  display: flex;
  justify-content: space-between;
  background-color: ${({ status }) =>
    status === "ERROR" ? "#f02c0e" : status === "WARN" ? "#e6c35a" : "#3c9654"};
  padding: 1em 1em;
  color: white;
  text-shadow: 2px 2px 5px #000;
`;

export const Row = styled.div `
  display: flex;
  background-color: lightgrey;
`;
export const Cell = styled.div ` 
  background-color: lightgrey;
  margin: 10px;
  width: 4em;
  text-shadow: 1px 1px 3px #fff;
`;
export const FooterMenu = styled.div `
  font-size: 2em;
  background-color: #e1e3e6;
`;