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

export const Level7 = () => {
  const [map, setMap] = useState([
    ["ethel20.png", "ethel12.png", "ethel21.png"],
    ["ethel11.png", null, "ethel10.png"],
    ["ethel01.png", "ethel22.png", "ethel00.png"],
  ]);
  const [s, setS] = useState(null as null | { x: number; y: number });
  console.log(map);
  return (
    <Puzzle>
      {[0, 1, 2].flatMap((y) =>
        [0, 1, 2].map((x) => (
          <button
            key={3 * y + x}
            onClick={() => {
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
            {map[y][x] && <img src={map[y][x]} />}
          </button>
        ))
      )}
    </Puzzle>
  );
};
