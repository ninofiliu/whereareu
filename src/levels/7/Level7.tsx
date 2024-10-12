import { useState } from "react";

export const Level7 = () => {
  const [map, setMap] = useState([
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["xx", "12", "22"],
  ]);
  const [s, setS] = useState(null as null | { x: number; y: number });
  return (
    <div>
      {[0, 1, 2].map((y) => (
        <div key={y}>
          {[0, 1, 2].map((x) => (
            <button
              key={x}
              onClick={() => {
                if (map[y][x] == "xx") {
                  if (s === null) return;
                  [map[y][x], map[s.y][s.x]] = [map[s.y][s.x], map[y][x]];
                  setMap(structuredClone(map));
                  setS(null);
                } else {
                  setS({ x, y });
                }
              }}
              style={{
                color: s && s.x === x && s.y === y ? "red" : "white",
              }}
            >
              {map[y][x]}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
