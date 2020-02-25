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
      <DataUnit data={props.data} />
      <DataUnit data={props.data} />
      <DataUnit data={props.data} />
      <FooterMenu>᛫᛫᛫</FooterMenu>
    </TableWrap>
  );
};
