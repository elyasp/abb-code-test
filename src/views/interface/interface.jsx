import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components/feature";
import { PageWrap } from "./styles";

export const Interface = () => {
  return (
    <div className="App">
      <Link to="/">Go Back to Manual</Link>
      <p>Overview of parts in Machine-Interface</p>
      <PageWrap>
        <Feature element="SEAM" status="OK" />
        <Feature element="SLOT" status="ERROR" />
        <Feature element="HOLE" status="WARN" />
      </PageWrap>
    </div>
  );
};
