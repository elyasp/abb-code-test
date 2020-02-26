/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components/feature";
import { PageWrap, Col, Header, Button } from "./styles";
import axios from "axios";

export const Interface = () => {
  const [devData, setDevData] = useState({});
  const dataAPI = axios.create({
    baseURL: `/`
  });

  // FETCH DATA, SAVE TO STATE AND PASS STATE AS AN ARRAY TO CHILDREN

  async function handleFetch() {
    await dataAPI
      .get("http://localhost:5000")
      .then(x => {
        setDevData(x.data);
      })
      .catch(err => {
        console.log("ERROR FETCHING DATA", err);
      });
  }

  useEffect(() => {
    handleFetch();
    setInterval(handleFetch, 5000);
  }, []);

  return (
    <div>
      <Header>
        <Link to="/">
          <Button>GO TO MANUAL</Button>
        </Link>
        <h1>PART A</h1>
        <Button onClick={handleFetch}>CLICK TO FETCH DATA</Button>
      </Header>

      <PageWrap>
        <Feature
          data={Object.values(devData)}
          element="HOLE A"
          length="3"
          status="✔"
        />
        <div>
          <Col>
            <Feature
              data={Object.values(devData)}
              element="SEAM A"
              length="1"
            />
            <Feature
              data={Object.values(devData)}
              element="SEAM B"
              length="1"
            />
          </Col>
          <Col>
            <Feature
              data={Object.values(devData)}
              element="SLOT A"
              length="1"
            />
            <Feature
              data={Object.values(devData)}
              element="SLOT B"
              length="1"
            />
          </Col>
        </div>
        <Feature data={Object.values(devData)} element="SLOT C" length="3" />
      </PageWrap>
    </div>
  );
};
