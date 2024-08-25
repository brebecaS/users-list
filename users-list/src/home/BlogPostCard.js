import "./BlogPostCard.css";

const BlogPostCard = ({ post }) => {
  const shortTitle = post.title?.substring(0, 20) || "";
  const shortBody = post.body?.substring(0, 150) || "";

  return (
    <div className="blog_post">
      <div className="container_copy">
        <h3>12 January 2019</h3>
        <h1>{shortTitle}</h1>
        <p>{shortBody}...</p>
        <a className="btn_primary" href={`/post/${post?.id}`}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostCard;
