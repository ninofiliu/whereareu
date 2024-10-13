import { useEffect, useRef, useState } from "react";

import { randInt } from "../../lib";

type Msg = { tabId: number } & (
  | { kind: "move"; center: { x: number; y: number } }
  | { kind: "quit" }
);

const getCenter = () => ({
  x: screenX + innerWidth / 2,
  y: screenY + innerHeight / 2,
});

const tabId = randInt(0, 1_000_000);

export const Level8 = () => {
  const centersRef = useRef({ [tabId]: getCenter() });
  const [centers, setCenters] = useState(centersRef.current);

  useEffect(() => {
    const channel = new BroadcastChannel("lvl8");
    const send = (msg: Msg) => channel.postMessage(msg);
    const listen = (cb: (evt: MessageEvent<Msg>) => unknown) =>
      channel.addEventListener("message", cb);

    const timeouts: Record<number, number> = {};

    listen((evt) => {
      switch (evt.data.kind) {
        case "move": {
          clearTimeout(timeouts[evt.data.tabId]);
          timeouts[evt.data.tabId] = setTimeout(() => {
            delete centersRef.current[evt.data.tabId];
            setCenters(structuredClone(centersRef.current));
          }, 1_000);

          centersRef.current[evt.data.tabId] = evt.data.center;
          setCenters(structuredClone(centersRef.current));
          break;
        }
      }
    });

    let stopLoop = false;
    const loop = () => {
      if (stopLoop) return;

      const center = getCenter();
      centersRef.current[tabId] = center;
      setCenters(structuredClone(centersRef.current));
      send({ tabId, kind: "move", center });

      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      stopLoop = true;
    };
  }, []);

  return <>{JSON.stringify(centers)}</>;
};
