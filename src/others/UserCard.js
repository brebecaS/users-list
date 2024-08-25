import "./UserCard.css";

const UserCard = (user) => {
  return (
    <div className="card">
      <img src={user?.picture?.large} alt="Person" className="card__image" />
      <p className="card__name">{user?.name?.first}</p>
      <div className="grid-container">
        <div className="grid-child-posts">156 Post</div>

        <div className="grid-child-followers">1012 Likes</div>
      </div>
    </div>
  );
};
export default UserCard;
