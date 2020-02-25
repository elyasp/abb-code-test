import React from "react";
import { DataBody, Cell, Row } from "./styles";

export const DataUnit = props => {
  const handleStatus = dev => {
    return dev === 0 || dev < 3 ? "OK" : dev > 4 && dev < 7 ? "WARN" : "X";
  };

  return (
    <DataBody>
      <Row>
        <Cell>X</Cell>
        <Cell>{props.xDev}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.xDev)}</Cell>
      </Row>
      <Row>
        <Cell>Y</Cell>
        <Cell>{props.yDev}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.yDev)}</Cell>
      </Row>
      <Row>
        <Cell>Z</Cell>
        <Cell>{props.zDev}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.zDev)}</Cell>
      </Row>
      <Row>
        <Cell>Diameter</Cell>
        <Cell>{props.diameter}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.diameter)}</Cell>
      </Row>
    </DataBody>
  );
};
