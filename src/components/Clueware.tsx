import styled from "@emotion/styled";
import { useState } from "react";

const Comp = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  text-align: right;
  span {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Clue = ({ kaomoji, clue }: { kaomoji: string; clue: string }) => {
  const [shown, setShown] = useState(false);
  return (
    <>
      <span
        onMouseOver={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        {shown && `( ${clue} )>   `}
        {kaomoji}
      </span>
      <br />
    </>
  );
};

export const Clueware = ({
  clue1,
  clue2,
  clue3,
}: {
  clue1?: string;
  clue2?: string;
  clue3?: string;
}) => (
  <Comp>
    {clue1 && <Clue kaomoji="☆(&gt;ᴗ•)" clue={clue1} />}
    {clue2 && <Clue kaomoji="σ(•̀ ω•́ σ)" clue={clue2} />}
    {clue3 && <Clue kaomoji="(˃ᆺ˂)" clue={clue3} />}
  </Comp>
);
