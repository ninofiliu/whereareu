import styled from "@emotion/styled";

const Comp = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  text-align: right;
  div:hover {
    opacity: 0.5;
  }
`;

export const Clueware = ({
  clue1,
  clue2,
  clue3,
}: {
  clue1: string;
  clue2: string;
  clue3: string;
}) => (
  <Comp>
    <div title={clue1}>(˃ᆺ˂)</div>
    <div title={clue2}>σ( •̀ ω •́ σ)</div>
    <div title={clue3}> ☆(&gt;ᴗ•)</div>
  </Comp>
);
