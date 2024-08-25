import "./Comment.css";

const Comment = ({ comment }) => {
  return (
    <div id="cbwrap">
      <div className="speech left">{comment}</div>
    </div>
  );
};
export default Comment;
