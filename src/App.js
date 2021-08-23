import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [postList, setPostList] = useState([{ title: "test" }]);
  return (
    <div className="App">
      {postList.map((post) => {
        return (
          <div>
            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
