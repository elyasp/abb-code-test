import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components/feature";
import { PageWrap, Col } from "./styles";
import axios from "axios";

export const Interface = () => {
  const [devData, setDevData] = useState({});
  const [devTolArray, setDevTolArray] = useState({});
  console.log("ARRAYYYY", Object.values(devData));
  const dataAPI = axios.create({
    baseURL: `/`
  });

  async function handleFetch() {
    await dataAPI
      .get("http://localhost:5000")
      .then(x => {
        setDevData(x.data);
        console.log(devTolArray);
      })
      .catch(err => {
        console.log("ERROR FETCHING DATA", err);
      });
  }

  useEffect(() => {
    handleFetch();
    setInterval(handleFetch, 3070);
  }, []);

  return (
    <div className="App">
      <Link to="/">Go Back to Manual</Link>
      <p>Overview of parts in Machine-Interface</p>
      <button onClick={handleFetch}>CLICK TO FETCH DATA</button>
      <PageWrap>
        <Feature
          data={Object.values(devData)}
          dataTotals={devTolArray}
          element="HOLE"
          status="WARN"
          length="3"
        />
        <div>
          <Col>
            <Feature
              data={Object.values(devData)}
              dataTotals={devTolArray}
              element="SEAM"
              status="OK"
              length="1"
            />
            <Feature
              data={Object.values(devData)}
              dataTotals={devTolArray}
              element="SEAM"
              status="ERROR"
              length="1"
            />
          </Col>
          <Col>
            <Feature
              data={Object.values(devData)}
              dataTotals={devTolArray}
              element="SLOT"
              status="OK"
              length="1"
            />
            <Feature
              data={Object.values(devData)}
              dataTotals={devTolArray}
              element="SLOT"
              status="ERROR"
              length="1"
            />
          </Col>
        </div>
        <Feature
          data={Object.values(devData)}
          dataTotals={devTolArray}
          element="SLOT"
          status="OK"
          length="3"
        />
      </PageWrap>
    </div>
  );
};
