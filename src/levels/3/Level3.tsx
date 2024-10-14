import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Clueware } from "../../components/Clueware";
import { randPick, randRange } from "../../lib";
import { Website } from "./Website";

const bulletSpeed = 5;
const popupSpeed = 1;
const popupWidth = 400;
const popupSpacing = 100;
const popupLives = 3;
const bulletTexts = [
  "no",
  "refuse",
  "go to hell",
  "disable",
  "fuck u",
  "leave me alone",
  "ewww",
  "heck no",
  ">:(",
  "ヽ(`⌒´メ)ノ",
  "i do not consent",
];
const popupTexts = [
  "Accept optional cookies?",
  "We notice you are using an adblocker. Please disable it to support our site.",
  "Accept tracking cookies?",
  "Allow push notifications?",
  "Join our mailing list!",
  "Get 10% off your first order!",
  "Accept ad cookies?",
  "Allow autoplay?",
  "Allow this site to access your camera?",
  "This website wants to access your location.",
  "Create an account to continue reading.",
  "Help us improve! Take a quick 2-minute survey.",
  "Allow this site to access your microphone",
  "Get a better experience with our mobile app!",
  "Like us on Facebook for daily updates!",
  "15-days free trial special offer click here!",
  "Need help? Chat with our support team now!",
  "Flah sale! 50% off ends in 10 minutes!",
  "How likely are you to recommend us to a friend?",
  "Allow this site to access your location?",
];

type Point = { x: number; y: number; txt: string };

const Page = styled.div`
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Level3 = () => {
  const mouseX = useRef(innerWidth / 2);
  const ref = useRef({
    bullets: [] as Point[],
    popups: popupTexts.map((txt, i) => ({
      txt,
      x: randRange(popupWidth / 2, innerWidth - popupWidth / 2),
      y: innerHeight / 2 - randRange(i * popupSpacing, (i + 2) * popupSpacing),
      lives: popupLives,
    })),
  });
  const [state, setState] = useState(ref.current);
  const navigate = useNavigate();

  useEffect(() => {
    let ended = false;
    const loop = () => {
      if (ended) return;
      const bulletElts = document.getElementsByClassName("lvl3-bullet");
      const popupElts = document.getElementsByClassName("lvl3-popup");

      // update position
      for (const b of ref.current.bullets) {
        b.y -= bulletSpeed;
      }
      for (const p of ref.current.popups) {
        p.y += popupSpeed;
      }

      // dead bullets
      {
        const bisToDelete = [] as number[];
        ref.current.bullets.forEach((b, bi) => {
          if (b.y < -10) {
            bisToDelete.push(bi);
          }
        });
        ref.current.bullets = ref.current.bullets.filter(
          (_, bi) => !bisToDelete.includes(bi)
        );
      }

      // collisions
      {
        const bisToDelete = [] as number[];
        const pisToDelete = [] as number[];
        ref.current.bullets.forEach((_, bi) => {
          const bulletElt = bulletElts[bi];
          if (!bulletElt) return;
          const bRect = bulletElt.getBoundingClientRect();
          ref.current.popups.forEach((p, pi) => {
            const popupElt = popupElts[pi];
            if (!popupElt) return;
            const pRect = popupElt.getBoundingClientRect();
            if (
              bRect.right < pRect.left ||
              bRect.left > pRect.right ||
              bRect.bottom < pRect.top ||
              bRect.top > pRect.bottom
            )
              return;
            bisToDelete.push(bi);
            p.lives--;
            if (p.lives === 0) pisToDelete.push(pi);
          });
        });
        ref.current.bullets = ref.current.bullets.filter(
          (_, bi) => !bisToDelete.includes(bi)
        );
        ref.current.popups = ref.current.popups.filter(
          (_, pi) => !pisToDelete.includes(pi)
        );
      }

      // game over
      {
        if (
          [...popupElts].some((p) => {
            const rect = p.getBoundingClientRect();
            return rect.bottom > innerHeight;
          })
        ) {
          alert("shit, I got analyticked again");
          navigate(0);
        }
      }

      setState(structuredClone(ref.current));
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      ended = true;
    };
  }, [navigate]);

  return (
    <>
      <Page
        onMouseMove={(evt) => {
          mouseX.current = evt.clientX;
        }}
        onClick={() => {
          if (!ref.current.popups.length) return;
          ref.current.bullets.push({
            x: mouseX.current,
            y: innerHeight,
            txt: randPick(bulletTexts),
          });
        }}
      >
        {state.popups.map((p, i) => (
          <div
            key={i}
            style={{
              maxWidth: `${popupWidth}px`,
              padding: "1em",
              border: "1px solid white",
              background: ["#f00", "#800", "#400", "#000"][p.lives],
              position: "fixed",
              left: `${p.x}px`,
              top: `${p.y}px`,
              textAlign: "center",
              transform: "translate(-50%, -50%)",
            }}
            className="lvl3-popup"
          >
            {p.txt}
          </div>
        ))}
        {state.bullets.map((b, i) => (
          <div
            key={i}
            style={{
              position: "fixed",
              left: `${b.x}px`,
              top: `${b.y}px`,
              transform: "translate(-50%, -50%)",
            }}
            className="lvl3-bullet"
          >
            {b.txt}
          </div>
        ))}

        <div>
          <h1>People Finder Web Site</h1>
          {state.popups.length ? (
            <>Please wait...</>
          ) : (
            <>
              <Website />
            </>
          )}
        </div>
      </Page>
      <Clueware
        clue1="It's a Space Invaders clone!"
        clue2="Try clicking around or pressing space"
        clue3="The username mentionned in level 1 was 'ethelreal666'"
      ></Clueware>
    </>
  );
};
