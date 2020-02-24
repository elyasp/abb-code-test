import React from "react";
import {
  FeatureHead,
  FeatureCell,
  FeatureRow,
  TableHead,
  TableWrap,
  FooterMenu
} from "./styles";
import { DataUnit } from "./dataUnit";

export const Feature = props => {
  return (
    <TableWrap>
      <TableHead>
        <FeatureHead status={props.status}>
          <div>O</div>
          <div>
            <b>{props.element}</b>
          </div>
          <div>{props.status}</div>
        </FeatureHead>
        <FeatureRow>
          <FeatureCell>
            <b>Control</b>
          </FeatureCell>
          <FeatureCell>
            <b>Dev</b>
          </FeatureCell>
          <FeatureCell>
            <b>Dev Out Total</b>
          </FeatureCell>
        </FeatureRow>
      </TableHead>
      <DataUnit xDev="1" yDev="2" zDev="4" diameter="4" />
      <DataUnit xDev="2" yDev="5" zDev="3" diameter="4" />
      <DataUnit xDev="76" yDev="7" zDev="8" diameter="4" />
      <FooterMenu>᛫᛫᛫</FooterMenu>
    </TableWrap>
  );
};
