import styled from "@emotion/styled";
import { Clueware } from "../../components/Clueware";

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

export const Level2 = () => {
  return (
    <>
      <Page>
        <Content>
          <div>
            damn, so Ethel deleted their account or smth? they had one for
            decades over there... whatever, let's find them back, i miss this
            little rabbit!!
          </div>
          <div>
            let's see, all i have is their cringe @ they used everywhere, where
            do i go from there? maybe the clueware i torrented once will finally
            come in handy
          </div>
        </Content>
      </Page>
      <Clueware
        clue1="Congrats you found the clueware!"
        clue2="If you're stuck on a puzzle, hover over us to get clues"
        clue3="Find the next level by modifying the URL"
      />
    </>
  );
};
