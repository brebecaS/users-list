import { useCallback, useEffect, useState } from "react";
import "./FullBlogPostCard.css";
import Comment from "./Comment";

const FullBlogPostCard = ({ post }) => {
  const [author, setAuthor] = useState({});
  const [comments, setComments] = useState([]);
  const shortTitle = post.title?.substring(0, 20) || "";

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + post?.userId).then(
      async (response) => {
        const decodedResponse = await response.json();
        setAuthor(decodedResponse);
      }
    );
  }, [post?.userId]);

  const loadComments = useCallback(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" + post?.id
    ).then(async (response) => {
      const decodedResponse = await response.json();
      setComments(decodedResponse);
    });
  }, [post?.id]);

  const commentsList = comments.map((comment) => (
    <Comment key={comment.id} comment={comment.body} />
  ));

  return (
    <div className="full_blog_post">
      <div class="full_img_pod">
        <img
          src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
          alt="random"
        />
      </div>
      <div className="full_container_copy">
        <h3 className="full_h3">{author?.name}</h3>
        <h1 className="full_h1">{shortTitle}</h1>
        <p className="full_p">{post.body}</p>

        <div>
          <div className="full_author">
            <span>Email: {author?.email}</span>
          </div>
          <div className="full_comments">
            <button
              className="full_btn_primary"
              onClick={() => {
                loadComments();
              }}
            >
              Comments
            </button>
            <div className="full_comments_list">{commentsList}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogPostCard;
