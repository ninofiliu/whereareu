import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Clueware } from "../../components/Clueware";
import { sleep } from "../../lib";

const Page = styled.div`
  width: 90vw;
  max-width: 800px;
  margin: 4em auto;
  img {
    border: 1px solid white;
    display: inline-block;
  }
`;

const Line = ({ length }: { length: number }) => (
  <>
    {Array(length)
      .fill(null)
      .map(() => (Math.random() < 0.2 ? " " : "�"))
      .join("")}
  </>
);

export const Level4 = () => {
  const [status, setStatus] = useState<"loading" | "loaded" | "finished">(
    "loading"
  );
  useEffect(() => {
    (async () => {
      alert(
        "omg yesss how could i forget about Ethel's eerily uncanny myspace"
      );
      setStatus("loaded");
      await sleep(2_000);
      alert("oh... yeah i forgot about the 2019 datapocalypse...");
      alert("200TB of memories just vanishing overnight wtf");
      alert("i just wish we had a moment of silence at school for this");
      alert(
        "cuz in a way, that was my generation's burning of the library of Alexandria u kno...."
      );
      await sleep(60_000);
      setStatus("finished");
    })();
  }, []);
  return status === "loading" ? (
    <>loading...</>
  ) : status === "loaded" ? (
    <Page>
      <Clueware
        clue1="A moment of silence is aka a MINUTE of silence"
        clue2="What if you just... waited?"
      />
      <div>
        <img
          src="/404.jpg"
          style={{
            width: "200px",
            height: "200px",
            float: "left",
            marginRight: "1em",
          }}
        />
        <h1>□□□□□ □□□ □□□□□□□</h1>
        <p>
          <i>
            <Line length={50} />
          </i>
        </p>
        <hr />
        <p>
          <Line length={200} />
        </p>
        <p>
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <img
                key={i}
                src="/404.jpg"
                style={{ width: "60px", height: "60px" }}
              />
            ))}
        </p>
        <hr />
        <hr />
        <p>
          <Line length={300} />
        </p>
        <p>
          {Array(20)
            .fill(null)
            .map((_, i) => (
              <img
                key={i}
                src="/404.jpg"
                style={{ width: "50px", height: "50px" }}
              />
            ))}
        </p>
        <div>
          <img
            src="/404.jpg"
            style={{
              width: "100px",
              height: "200px",
              float: "right",
              marginLeft: "1em",
            }}
          />
          <p>
            <Line length={200} />
          </p>
          <p>
            <Line length={300} />
          </p>
          <p>
            <Line length={100} />
          </p>
        </div>
        <hr />
        <p>
          <Line length={50} />
        </p>
        <p>
          <Line length={20} />
        </p>
        <p>
          <Line length={5} />
        </p>
      </div>
    </Page>
  ) : (
    <Page>
      Thank your for paying your respects. <Link to="/level5">Here</Link>'s
      where you might find more information about this corrupted profile
    </Page>
  );
};
