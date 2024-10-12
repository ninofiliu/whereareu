import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 90vw;
  max-width: 600px;
`;

const Textarea = styled.textarea`
  resize: none;
`;

export const Level0 = () => {
  const [sending, setSending] = useState(false);
  const [tries, setTries] = useState(0);

  const send = async () => {
    setSending(true);
    await new Promise((r) => setTimeout(r, 1_000));
    setSending(false);
    setTries(tries + 1);
  };

  return (
    <Page>
      <Content>
        <div>
          To: <input type="text" disabled value="ethelreal666" />
        </div>
        <Textarea disabled rows={7}>
          hey Ethel! i know it's kinda random to msg u after not talking to u
          for years but guess what happened today!! well remember the abandonned
          house near my place?? it's gettin renovated, i saw construction
          workers painting the whole thing "gentrification turquoise" xD idk it
          made me think abt u cuz we used to hangout there all the time.. anyway
          what's up how r u???
        </Textarea>
        <div>
          <button disabled={sending} onClick={send}>
            {tries ? "Try again" : "Send"}
          </button>
        </div>
        {sending && <div>sending...</div>}
        {!sending && tries ? <div>User not found!</div> : null}
        {tries > 1 ? <Link to="/level2">that's weird...</Link> : null}
      </Content>
    </Page>
  );
};
