import React, { useState, useEffect } from "react";
import { DataBody, Cell, Row } from "./styles";

export const DataUnit = props => {
  const [dataArray, setDataArray] = useState({});
  console.log(">>>>>", props.data);

  const handleDevOutTotal = array => {
    setDataArray(array);
    console.log("THE STATE", typeof dataArray);
  };

  useEffect(() => {
    handleDevOutTotal(props.data);
  }, []);

  console.log("LOOOK", dataArray);

  const handleStatus = dev => {
    return dev === 0 || dev < 10 ? "OK" : dev > 11 && dev < 20 ? "WARN" : "X";
  };

  return (
    <div>
      <Row>
        <Cell>X</Cell>
        <Cell>{props.data[0]}</Cell>

        <Cell>0</Cell>
        <Cell>{handleStatus(props.data[0])}</Cell>
      </Row>
      <Row>
        <Cell>Y</Cell>
        <Cell>{props.data[1]}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data[1])}</Cell>
      </Row>
      <Row>
        <Cell>Z</Cell>
        <Cell>{props.data[2]}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data[2])}</Cell>
      </Row>
      <Row>
        <Cell>Diameter</Cell>
        <Cell>{props.data[3]}</Cell>
        <Cell>0</Cell>
        <Cell>{handleStatus(props.data[4])}</Cell>
      </Row>
    </div>
  );
};
