import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Clueware } from "../../components/Clueware";
import { lerp, randColor, randPick, randRange } from "../../lib";

const pNb = 100;
const pNoise = 10;
const pAttraction = 0.1;
const pChance = 0.1;

type Msg = { tabId: string; center: { x: number; y: number } };

const getCenter = () => ({
  x: screenX + innerWidth / 2,
  y: screenY + innerHeight / 2,
});

const tabId = randColor();

const newParticlesAtCenter = (
  center: { x: number; y: number },
  tabId: string
) =>
  Array(pNb)
    .fill(null)
    .map(() => ({
      x: center.x,
      y: center.y,
      tabId,
    }));

export const Level8 = () => {
  const [won, setWon] = useState(false);
  const [wonText, setWonText] = useState("You won!");

  const centersRef = useRef({ [tabId]: getCenter() });
  const [_centers, setCenters] = useState(centersRef.current);
  const particlesRef = useRef(newParticlesAtCenter(getCenter(), tabId));
  const [particles, setParticles] = useState(particlesRef.current);

  useEffect(() => {
    const channel = new BroadcastChannel("lvl8");
    const send = (msg: Msg) => channel.postMessage(msg);
    const listen = (cb: (evt: MessageEvent<Msg>) => unknown) =>
      channel.addEventListener("message", cb);

    const timeouts: Record<string, number> = {};

    listen((evt) => {
      setTimeout(() => {
        setWon(true);
      }, 5_000);

      clearTimeout(timeouts[evt.data.tabId]);
      timeouts[evt.data.tabId] = window.setTimeout(() => {
        delete centersRef.current[evt.data.tabId];
        setCenters(structuredClone(centersRef.current));
        particlesRef.current = particlesRef.current.filter(
          (p) => p.tabId !== evt.data.tabId
        );
        setParticles(structuredClone(particlesRef.current));
      }, 1_000);

      centersRef.current[evt.data.tabId] = evt.data.center;
      setCenters(structuredClone(centersRef.current));
    });

    let stopLoop = false;
    const loop = () => {
      if (stopLoop) return;

      // update centers
      const center = getCenter();
      centersRef.current[tabId] = center;
      setCenters(structuredClone(centersRef.current));
      send({ tabId, center });

      // update particles
      for (const p of particlesRef.current) {
        p.x += randRange(-pNoise, pNoise);
        p.y += randRange(-pNoise, pNoise);
        const center =
          centersRef.current[p.tabId] ?? Object.values(centersRef.current)[0];
        p.x = lerp(p.x, center.x, pAttraction);
        p.y = lerp(p.y, center.y, pAttraction);
        if (Math.random() < pChance) {
          p.tabId = randPick(Object.keys(centersRef.current));
        }
      }
      setParticles(particlesRef.current);

      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      stopLoop = true;
    };
  }, []);

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          style={{
            width: "5px",
            height: "5px",
            transform: "translate(-50%, -50%)",
            position: "fixed",
            left: `${p.x - screenX}px`,
            top: `${p.y - screenY}px`,
            background: p.tabId,
          }}
        />
      ))}
      {won && (
        <Link
          to="/credits"
          onMouseOver={() => {
            setWonText("You won! Or did you?...");
          }}
          onMouseLeave={() => {
            setWonText("You won!");
          }}
        >
          {wonText}
        </Link>
      )}
      <Clueware clue1="Try opening the same URL in another browser tab and seeing them side by side" />
    </>
  );
};
