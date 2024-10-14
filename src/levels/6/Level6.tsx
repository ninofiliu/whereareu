import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { Clueware } from "../../components/Clueware";
import { randInt, randPick, sleep } from "../../lib";
import fakeAd1 from "./fake_ad1.png";
import fakeAd2 from "./fake_ad2.png";
import fakeAd3 from "./fake_ad3.png";
import fakeAd4 from "./fake_ad4.png";
import fakeAd5 from "./fake_ad5.png";
import fakeForm from "./fake_form.png";
import hotMoms from "./hot_moms.png";

const srcs = [
  fakeForm,
  fakeForm,
  fakeForm,
  fakeAd1,
  fakeAd2,
  fakeAd3,
  fakeAd4,
  fakeAd5,
  hotMoms,
];
const beforeSrcs = Array(randInt(5, 15))
  .fill(null)
  .map(() => randPick(srcs));
const afterSrcs = Array(randInt(5, 15))
  .fill(null)
  .map(() => randPick(srcs));

const Page = styled.div`
  width: 800px;
  margin: 4em auto;
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5em;
  }
`;

const Ads = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Results = styled.div`
  border: 1px solid white;
  padding: 1em;
`;

const ImgResults = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  img {
    width: 100%;
  }
`;

export const Level6 = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [status, setStatus] = useState<
    "init" | "loading" | "unknown" | "found"
  >("init");

  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setStatus("loading");
    await sleep(5_000);
    setStatus(
      firstName === "Ethel" &&
        middleName === "Ron" &&
        lastName === "Ealston" &&
        username === "ethelreal666"
        ? "found"
        : "unknown"
    );
  };

  return (
    <Page>
      <h1 style={{ textAlign: "center" }}>findmyfriends.org</h1>
      <hr />
      <p style={{ textAlign: "center" }}>The oldest OSINT search engine</p>
      <hr />
      <div>
        <p></p>
        <div>/!\/!\/!\</div>
        <div>
          Security Note (
          {new Date(+new Date() - 3 * 24 * 60 * 60 * 1000).toDateString()}): We
          are investigating the issue of some ads trying to impersonate the
          interface of our advanced search. Please proceed with caution.
        </div>
        <div>/!\/!\/!\</div>
        <p></p>
      </div>
      <Ads>
        {beforeSrcs.map((src, i) => (
          <img
            src={src}
            key={i}
            onClick={() => {
              location.href = "/idiot.webp";
            }}
          />
        ))}
        <form onSubmit={onSubmit}>
          <input
            placeholder="First name"
            required
            value={firstName}
            onChange={(evt) => setFirstName(evt.target.value)}
            disabled={status === "loading"}
          />
          <input
            placeholder="Midde name(s)"
            required
            value={middleName}
            onChange={(evt) => setMiddleName(evt.target.value)}
            disabled={status === "loading"}
          />
          <input
            placeholder="Last name"
            required
            value={lastName}
            onChange={(evt) => setLastName(evt.target.value)}
            disabled={status === "loading"}
          />
          <input
            placeholder="Username"
            required
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            disabled={status === "loading"}
          />
          <button disabled={status === "loading"}>Search</button>
        </form>
        {status === "loading" && <div>Loading...</div>}
        {status === "unknown" && <div>No match found</div>}
        {status === "found" && (
          <Results>
            <h2>Text results</h2>
            <p>No match</p>
            <hr />
            <h2>Image results</h2>
            <ImgResults>
              <img src="/ethel21.png" />
              <img src="/ethel01.png" />
              <img src="/ethel00.png" />
              <img src="/ethel22.png" />
              <img src="/ethel11.png" />
              <img src="/ethel12.png" />
              <img src="/ethel20.png" />
              <img src="/ethel10.png" />
            </ImgResults>
            <p>
              <Link to="/level7">Process images...</Link>
            </p>
          </Results>
        )}

        {afterSrcs.map((src, i) => (
          <img
            src={src}
            key={i}
            onClick={() => {
              location.href = "/idiot.webp";
            }}
          />
        ))}
      </Ads>
      <Clueware
        clue1="Remember the tricks people used to distinguish the real from fake download buttons on sketchy websites?"
        clue2="Real web forms can't be dragged and dropped, and they change display on hover"
        clue3="Not writing down clues aren't u?^^ Ethel Ron Ealston's username is ethelreal666"
      />
    </Page>
  );
};
