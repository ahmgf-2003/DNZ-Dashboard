const FollowBtn = ({ isFollowed }) => {
    return (
        <button className={`follow-btn ${isFollowed ? "followed" : null}`}>
            {isFollowed ? "Followed" : "+ Follow"}
        </button>
    );
};

export default FollowBtn;
