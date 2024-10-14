import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Page = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  max-width: 600px;
  border: 1px solid orange;
  color: orange;
  padding: 1em;
  *:first-child {
    margin-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
  }
`;

export const Ad = () => {
  return (
    <Page>
      <Content>
        <h1>Threat stopped</h1>
        <p>
          Your browser stopped you from navigating to a shady website after you
          clicked on an ad
        </p>
        <p>B careful! It's getting dangerous out there...</p>
        <p>
          <Link to="/level6">&lt;&lt;&lt; Go back to lvl6</Link>
        </p>
      </Content>
    </Page>
  );
};
