import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components/feature";
import { PageWrap } from "./styles";
import axios from "axios";

export const Interface = () => {
  const [devData, setDevData] = useState({});
  const dataAPI = axios.create({
    baseURL: `/`
  });

  async function handleFetch() {
    await dataAPI
      .get("http://localhost:5000")
      .then(x => setDevData(x.data))
      .catch(err => {
        console.log("ERROR FETCHING DATA", err);
      });
  }

  useEffect(() => {
    handleFetch();
    setInterval(handleFetch, 500);
  }, []);

  return (
    <div className="App">
      <Link to="/">Go Back to Manual</Link>
      <p>Overview of parts in Machine-Interface</p>
      <button onClick={handleFetch}>CLICK TO FETCH DATA</button>
      <PageWrap>
        <Feature data={devData} element="SEAM" status="OK" />
        <Feature data={devData} element="SLOT" status="ERROR" />
        <Feature data={devData} element="HOLE" status="WARN" />
      </PageWrap>
    </div>
  );
};
