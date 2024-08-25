import { useEffect, useState } from "react";
import FullBlogPostCard from "./FullBlogPostCard";
import "./Post.css";
import { useParams } from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
  let params = useParams();

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${params?.postId || ""}`
    ).then(async (response) => {
      const decodedResponse = await response.json();
      console.log(decodedResponse);
      setPost(decodedResponse);
    });
  }, [params?.postId]);

  return (
    <div className="post">
      <div className="post-container">
        <FullBlogPostCard post={post} />
      </div>
    </div>
  );
};

export default Post;
