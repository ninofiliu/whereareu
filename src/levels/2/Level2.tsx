import styled from "@emotion/styled";

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

const Clueware = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  text-align: right;
  div:hover {
    opacity: 0.5;
  }
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
      <Clueware>
        <div title="Congrats you found the clueware!">(˃ᆺ˂)</div>
        <div title="If you're stuck on a puzzle, hover over us to get clues">
          σ( •̀ ω •́ σ)
        </div>
        <div title="Find the next level by modifying the URL"> ☆(&gt;ᴗ•)</div>
      </Clueware>
    </>
  );
};
