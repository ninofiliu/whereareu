import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export const Website = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [searchedUsername, setSearchedUsername] = useState("");
  const onSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1_000));
    setSearchedUsername(username);
    setLoading(false);
  };

  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
      <div>
        {loading ? (
          <>loading...</>
        ) : searchedUsername === "" ? (
          <>Type in username above</>
        ) : searchedUsername.toLowerCase() === "ethelreal666" ? (
          <>
            <h2>One result found</h2>
            <ul>
              <li>Name: Ethel Ron Ealston</li>
              <li>Address: UNKNOWN</li>
              <li>Phone number: UNKNOWN</li>
              <li>
                MySpace: <Link to="/level4">@ethelreal666</Link>
              </li>
            </ul>
          </>
        ) : (
          <>No match</>
        )}
      </div>
    </>
  );
};
