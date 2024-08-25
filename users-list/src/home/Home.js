import "./App.css";
import BlogPostCard from "./BlogPostCard";

import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (response) => {
        const decodedResponse = await response.json();
        setPosts(decodedResponse);
        console.log(decodedResponse);
      }
    );
  }, []);

  const postsElements = posts.map((post) => (
    <BlogPostCard post={post} key={post.id} />
  ));

  return (
    <div className="App">
      <div>
        <div className="container">{postsElements}</div>
      </div>
    </div>
  );
}

export default Home;
