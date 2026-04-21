import { MdOutlineStar } from "react-icons/md";

const Review = ({ children: review }) => {
    return (
        <span className="reviews">
            <MdOutlineStar />
            {review}
        </span>
    );
};

export default Review;
