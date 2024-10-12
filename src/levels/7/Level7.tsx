import styled from "@emotion/styled";
import { useState } from "react";

const Puzzle = styled.div`
  display: grid;
  margin: auto;
  width: calc(100vmin);
  height: calc(100vmin);
  grid-template-columns: 1fr 1fr 1fr;
  button {
    width: calc(100vmin / 3);
    height: calc(100vmin / 3);
    background: transparent;
    border: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const SatanicMessage = styled.div`
  position: fixed;
  inset: calc(100vh / 3) 0;
  font-family: serif;
  transform: scaleY(3);
  pointer-events: none;
  color: red;
  font-size: 80px;
  text-shadow: white 0 0 0.1em;
  display: flex;
  align-items: center;
  div {
    text-align: center;
    width: 100%;
  }
`;
const Matthew = styled.div`
  position: fixed;
  inset: 5%;
  pointer-events: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const story: Record<number, string> = {
  30: "xD",
  70: "HAHAHA",
  80: "Your So Funnyyyy....",
  90: "Come On Try Harder",
  100: "Just A Little Bit More.......",
  110: "HAHAHAHHAHAHA",
  115: "Still Looking For Your Friend Uh???",
  120: "xDxDget rekkkkt",
  125: "do you even...",
  127: "no don't tell me...",
  128: "don't... xDxDxD",
  130: "DONT TELL ME U FORGOT",
  132: "LMAO THAT S SO FUNNY",
  134: "U DONT REMEMBER THEIR FACE DO YOU",
  135: "Cuz That's Sure As Hell Not Ethel",
  136: "That Fucking Matthew Lillard In Hackers (1995)",
  137: "U Used To Daydream He Was Ur Friend",
  138: "Cuz U Didn't Have Friends For Real IRL",
  139: "Didn't Know U Were Still Delusional xD",
  140: "That's So Pathetic",
  142: "BUT COME ON KEEP PLAYING WITH YOURSELF",
  143: "AND TELL THE GHOSTS I SAID HI",
  144: "HAHAHAHHAHAHAHAHHAHA",
  145: "!!!!!!!!!!!!!!!!!!!!",
};

export const Level7 = () => {
  const [map, setMap] = useState([
    ["ethel20.png", "ethel12.png", "ethel21.png"],
    ["ethel11.png", null, "ethel10.png"],
    ["ethel01.png", "ethel22.png", "ethel00.png"],
  ]);
  const [s, setS] = useState(null as null | { x: number; y: number });
  const [step, setStep] = useState(0);

  return (
    <>
      <Puzzle>
        {[0, 1, 2].flatMap((y) =>
          [0, 1, 2].map((x) => (
            <button
              key={3 * y + x}
              onClick={() => {
                setStep(step + 1);
                if (map[y][x] === null) {
                  if (s === null) return;
                  if (Math.abs(x - s.x) + Math.abs(y - s.y) > 1) return;
                  [map[y][x], map[s.y][s.x]] = [map[s.y][s.x], map[y][x]];
                  setMap(structuredClone(map));
                  setS(null);
                } else {
                  setS({ x, y });
                }
              }}
              style={{
                opacity: s && s.x === x && s.y === y ? 0.2 : 1,
              }}
            >
              {map[y][x] && (
                <img
                  src={map[y][x]}
                  style={{
                    filter: `contrast(${1 + 0.01 * step}) saturate(${
                      1 + 0.01 * step
                    })`,
                  }}
                />
              )}
            </button>
          ))
        )}
      </Puzzle>
      {step >= 136 && (
        <Matthew>
          <img src="/hackers.jpg" />
        </Matthew>
      )}
      {step in story && (
        <SatanicMessage>
          <div>{story[step]}</div>
        </SatanicMessage>
      )}
    </>
  );
};
