import React from "react";
import {
  FeatureHead,
  Cell,
  Row,
  TableHead,
  TableWrap,
  FooterMenu,
  Wrap
} from "./styles";
import { DataUnit } from "./dataUnit";

export const Feature = props => {
  console.log(props.length);
  return (
    <TableWrap>
      <Wrap>
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
        {Array(parseInt(props.length)).fill(
          <DataUnit data={props.data} dataTotals={props.dataTotals} />
        )}
        <FooterMenu>᛫᛫᛫</FooterMenu>
      </Wrap>
    </TableWrap>
  );
};
