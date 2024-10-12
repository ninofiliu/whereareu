import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { sleep } from "../../lib";

const Page = styled.div`
  width: 90vw;
  max-width: 800px;
  margin: 4em auto;
  img {
    width: 100%;
    max-width: 300px;
  }
`;

export const Level5 = () => {
  const navigate = useNavigate();
  const [idiot, setIdiot] = useState(false);
  const onClick = async () => {
    setIdiot(true);
    await sleep(3_000);
    alert("ha u got pwned x)");
    alert(
      "yeah this website was a joke, there's no such thing as human-assisted audio forensics lol..."
    );
    alert("but i got u to plug in your headphones didn't u??");
    alert(
      "idk man call me cringe millenial if u want but audio connectics was simpler before the days of dongles and bluetooth slop..."
    );
    alert(
      "anyway let's go to the real place where i might be finding back Ethel"
    );
    navigate("/level6");
  };

  return (
    <Page>
      <h1>Lost Profiles Audiolocator</h1>
      <p>
        This website combines forensic algorithms and human auditory
        capabilities to assist in large scale data recovery efforts.
      </p>
      <p>
        <span>Incident:</span>
        <select>
          <option>1998 Toy Story 2 deletion</option>
          <option>1999 NASA Mars Climate Orbiter</option>
          <option>2007 UK child benefit data loss</option>
          <option>2011 Gmail deletions</option>
          <option>2012 MegaUpload seizure</option>
          <option>2017 Maersk vs NotPetya incident</option>
          <option>2019 Myspace Datapocalypse</option>
        </select>
      </p>
      <p>Please plug in headphones before processing.</p>
      <p>
        <button onClick={onClick}>Start</button>
      </p>
      {idiot && <img src="/idiot.webp" />}
    </Page>
  );
};
