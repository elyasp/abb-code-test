import React from "react";
import { DataBody, Cell, Row } from "./styles";

export const DataUnit = props => {
  console.log("INCOMING", props.data);
  const handleStatus = dev => {
    return dev === 0 || dev < 10 ? "OK" : dev > 11 && dev < 20 ? "WARN" : "X";
  };

  return (
    <DataBody>
      <Row>
        <Cell>X</Cell>
        <Cell>{props.data.xDev}</Cell>

        <Cell>0</Cell>
        <Cell>{handleStatus(props.data.xDev)}</Cell>
      </Row>
      <Row>
        <Cell>Y</Cell>
        <Cell>{props.data.yDev}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data.yDev)}</Cell>
      </Row>
      <Row>
        <Cell>Z</Cell>
        <Cell>{props.data.zDev}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data.zDev)}</Cell>
      </Row>
      <Row>
        <Cell>Diameter</Cell>
        <Cell>{props.data.diameter}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data.diameter)}</Cell>
      </Row>
    </DataBody>
  );
};
