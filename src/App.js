import "./styles.css";
import { file } from "./File";
import "./App.css";
import { useState } from "react";
export default function App() {
  const [state, setstate] = useState("");

  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="search"
          className="search"
          onChange={(e) => setstate(e.target.value)}
        />
        <ul className="list">
          {file
            .filter((user) => user.first_name.toLowerCase().includes(state))
            .map((user) => {
              return (
                <li className="listItem" key={user.id}>
                  {user.first_name}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}
