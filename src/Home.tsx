import { Link } from "react-router-dom";

export const Home = () => (
  <div
    style={{
      position: "fixed",
      inset: "0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <h1>whereareu.online</h1>
      <p>
        A game by <a href="https://ninofiliu.com">Nino Filiu</a> (
        <a href="https://distraction.fun/">Distraction Collective</a>)
      </p>
      <p>
        <a href="https://ninofiliu.itch.io/whereareu">Itch page</a>
      </p>
      <Link to="/level1">&gt;&gt;&gt; Play &lt;&lt;&lt;</Link>
    </div>
  </div>
);
