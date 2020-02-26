import React, { useState } from "react";
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
  const [featureStatus, setFeatureStatus] = useState();

  // RECEIVE DATA FROM CHILD , SAVE TO STATE AND PASS INTO STYLED-COMPONENT
  const retrieveStatus = data => {
    typeof data === "string" && data
      ? setFeatureStatus(data)
      : console.log("FAILED");
  };

  return (
    <TableWrap>
      <div>
        <TableHead>
          <FeatureHead status={featureStatus}>
            <div>O</div>
            <div>
              <b>{props.element}</b>
            </div>
            <div>{featureStatus}</div>
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
          <DataUnit
            data={props.data}
            element={props.element}
            status={retrieveStatus}
          />
        )}
        <FooterMenu>᛫᛫᛫</FooterMenu>
      </div>
    </TableWrap>
  );
};
