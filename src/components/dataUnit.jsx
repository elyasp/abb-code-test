import React, { useState, useEffect } from "react";
import { Cell, Row } from "./styles";

export const DataUnit = props => {
  const [xDevTol, setxDevTol] = useState([]);
  const [yDevTol, setyDevTol] = useState([]);
  const [zDevTol, setzDevTol] = useState([]);
  const [diaDevTol, setDiaDevTol] = useState([]);

  // UPDATE EACH INDIVIDUAL STATE PER CONTROL
  const handleDevOutTotal = dev => {
    const xDevOutTol = parseInt(dev[0]);
    const yDevOutTol = parseInt(dev[1]);
    const zDevOutTol = parseInt(dev[2]);
    const diaDevTol = parseInt(dev[3]);

    setxDevTol(arr => [...arr, xDevOutTol]);
    setyDevTol(arr => [...arr, yDevOutTol]);
    setzDevTol(arr => [...arr, zDevOutTol]);
    setDiaDevTol(arr => [...arr, diaDevTol]);
  };

  // RETURN DEVIATION TOTAL PER CONTROL
  const sumDev = array => {
    const newArray = [...array];
    newArray.splice(0, 1);
    newArray.unshift(0);
    const sum = newArray.reduce((acc, val) => acc + val);
    return sum;
  };

  // STATUS ICON FOR EACH CONTROL
  const handleControlStatus = dev => {
    const sum = sumDev(dev);
    return sum <= 40 ? "✔" : sum >= 41 && sum <= 80 ? "⚠️ " : "❌";
  };

  // STATUS HEADER FOR FEATURE
  const handleFeatureStatus = () => {
    const sum =
      sumDev(xDevTol) + sumDev(yDevTol) + sumDev(zDevTol) + sumDev(diaDevTol);
    return sum <= 200
      ? "✔"
      : sum >= 201 && sum <= 320
      ? "⚠️"
      : sum >= 321 && sum <= 400
      ? "❌"
      : "❌";
  };

  // SEND DATA TO PARENT, WHERE FEATUREHEADER IS RENDERED
  props.status(handleFeatureStatus());

  // CONTINUOUSLY PASS DATA AS IT CHANGES
  useEffect(() => {
    handleDevOutTotal(props.data);
  }, [props.data]);

  return (
    <div>
      <Row>
        <Cell>X</Cell>
        <Cell>{props.data[0] || 0}</Cell>
        <Cell>{sumDev(xDevTol)}</Cell>
        <Cell>{handleControlStatus(xDevTol)}</Cell>
      </Row>
      <Row>
        <Cell>Y</Cell>
        <Cell>{props.data[1] || 0}</Cell>
        <Cell>{sumDev(yDevTol)}</Cell>
        <Cell>{handleControlStatus(yDevTol)}</Cell>
      </Row>
      <Row>
        <Cell>Z</Cell>
        <Cell>{props.data[2] || 0}</Cell>
        <Cell>{sumDev(zDevTol)}</Cell>
        <Cell>{handleControlStatus(zDevTol)}</Cell>
      </Row>
      <Row>
        <Cell>Diameter</Cell>
        <Cell>{props.data[3] || 0}</Cell>
        <Cell>{sumDev(diaDevTol)}</Cell>
        <Cell>{handleControlStatus(diaDevTol)}</Cell>
      </Row>
    </div>
  );
};
