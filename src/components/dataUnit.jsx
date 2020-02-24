import React from "react";
import { DataBody, FeatureCell, FeatureRow } from "./styles";

export const DataUnit = props => {
  const handleStatus = dev => {
    return dev === 0 || dev < 3 ? "OK" : dev > 4 && dev < 7 ? "WARN" : "X";
  };

  return (
    <DataBody>
      <FeatureRow>
        <FeatureCell>X</FeatureCell>
        <FeatureCell>{props.xDev}</FeatureCell>
        <FeatureCell>0</FeatureCell>
        <FeatureCell>{handleStatus(props.xDev)}</FeatureCell>
      </FeatureRow>
      <FeatureRow>
        <FeatureCell>Y</FeatureCell>
        <FeatureCell>{props.yDev}</FeatureCell>
        <FeatureCell>0</FeatureCell>
        <FeatureCell>{handleStatus(props.yDev)}</FeatureCell>
      </FeatureRow>
      <FeatureRow>
        <FeatureCell>Z</FeatureCell>
        <FeatureCell>{props.zDev}</FeatureCell>
        <FeatureCell>0</FeatureCell>
        <FeatureCell>{handleStatus(props.zDev)}</FeatureCell>
      </FeatureRow>
      <FeatureRow>
        <FeatureCell>Diameter</FeatureCell>
        <FeatureCell>{props.diameter}</FeatureCell>
        <FeatureCell>0</FeatureCell>
        <FeatureCell>{handleStatus(props.diameter)}</FeatureCell>
      </FeatureRow>
    </DataBody>
  );
};
