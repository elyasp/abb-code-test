import styled from "styled-components";

export const TableWrap = styled.div `
  margin: 5px;
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

export const DataBody = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Row = styled.div `
  display: flex;
  background-color: lightgrey;
`;
export const Cell = styled.div `
  display: flex;
  justify-content: space-around;
  background-color: lightgrey;
  margin: 10px;
  min-width: 5em;
  text-shadow: 1px 1px 3px #fff;
`;
export const FooterMenu = styled.div `
  display: flex;
  justify-content: center;
  font-size: 2em;
  background-color: #e1e3e6;
`;