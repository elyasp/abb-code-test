import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "../../components/feature";
import { DemoFeatures, Header, Button, TextBox } from "./styles";

export const Main = () => {
  return (
    <div>
      <Header>
        <h1>Human-Machine Interface</h1>
      </Header>

      <DemoFeatures>
        <Feature data={{}} element="SEAM" length="2" />
        <Feature data={{}} element="SLOT" length="1" />
        <TextBox>
          <h1>MANUAL OF INTERFACE</h1>
          <p>
            This application shows realtime measurement results that are made on
            each feature of a part. The data is fetched as JSON from the API
            with a 10sec interval making an axios call to the server. With React
            the fetched data is passed down as props to the Feature and DataUnit
            component
            <br />
            <br />
            The shown components:
            <ul>
              <li>
                Each feature (SEAM, SLOT or HOLE) varies in length depending on
                the number of controls (data units).
                <br />
                <br />
                <li>
                  Each feature header has an overall quality indicator:
                  <ul>
                    <li>GREEN if the sum of all DevTotals are under 200</li>
                    <li>
                      YELLOW if the sum of DevTotals are between 201 and 320
                    </li>
                    <li>RED if all devTotals combined exceed 400</li>
                  </ul>
                  <br />
                </li>
              </li>
              <li>
                Control indicates every measured parameter of its Feature (X, Y,
                Z and diameter)
              </li>
              <li>
                Dev shows the measurement deviation specific to its control,
                this data is auto-renewed.
              </li>
              <br />
              <li>
                Dev Out Total is the sum of all deviations that have been
                fetched
                <ul>
                  <li>A total deviation of max. 40 is considered safe "✔" </li>
                  <li>
                    A total deviation between 41 and 80 gives a warning ⚠️{" "}
                  </li>
                  <li>
                    A total deviation of more than 81 is critical error ❌{" "}
                  </li>
                </ul>
              </li>
            </ul>
            <strong>
              Please note, since the same fetch is used for all Data Units, they
              are updated in synchro. This is not a bug but rather a
              simplification
            </strong>
          </p>

          <Link to="/interface">
            <Button>GO TO INTERFACE</Button>
          </Link>
        </TextBox>
      </DemoFeatures>
    </div>
  );
};
