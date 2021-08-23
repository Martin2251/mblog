import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [postList, setPostList] = useState([]);

  // in the scope of the component
  async function fetchPostList() {
    const response = await fetch("http://localhost:3000/posts");
    const data = await response.json();
    setPostList(data); // update our state
  }

  useEffect(() => {
    fetchPostList(); // this function will be called when users land on page
  }, []);

  // it will execute only on component did mount

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
