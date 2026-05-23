import { useState } from "react"

const FollowBtn = ({ isFollowed }) => {
    const [follow, setFollow] = useState(isFollowed);

    function toggleFollow() {
        setFollow(prev => !prev);
    }

    return (
        <button className={`follow-btn ${follow ? "followed" : null}`} onClick={toggleFollow}>
            {follow ? "Followed" : "+ Follow"}
        </button>
    );
};

export default FollowBtn;
