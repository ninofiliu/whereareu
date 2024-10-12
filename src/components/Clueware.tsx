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
  clue1?: string;
  clue2?: string;
  clue3?: string;
}) => (
  <Comp>
    {clue1 ? <div title={clue1}>(˃ᆺ˂)</div> : null}
    {clue2 ? <div title={clue2}>σ(•̀ ω•́ σ)</div> : null}
    {clue3 ? <div title={clue3}> ☆(&gt;ᴗ•)</div> : null}
  </Comp>
);
