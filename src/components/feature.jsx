import React from "react";
import {
  FeatureHead,
  Cell,
  Row,
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
        <Row>
          <Cell>
            <b>Control</b>
          </Cell>
          <Cell>
            <b>Dev</b>
          </Cell>
          <Cell>
            <b>Dev Out Total</b>
          </Cell>
        </Row>
      </TableHead>
      <DataUnit xDev="1" yDev="2" zDev="4" diameter="4" />
      <DataUnit xDev="2" yDev="5" zDev="3" diameter="4" />
      <DataUnit xDev="76" yDev="7" zDev="8" diameter="4" />
      <FooterMenu>᛫᛫᛫</FooterMenu>
    </TableWrap>
  );
};
