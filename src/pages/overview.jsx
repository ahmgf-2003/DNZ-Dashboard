import Mentor from "../components/Mentor/Index";
import Chart from "../components/Chart"
import person1 from "../assets/images/person-1.png";
import person2 from "../assets/images/person-2.png";
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md";


const Overview = () => {
    const mentors = [
        {
            name: "Curious George",
            image: person1,
            job: "UI UX Design",
            tasks: 40,
            reviews: 750,
            rate: "4,7",
            isFollowed: false,
        },
        {
            name: "Abraham Lincoln",
            image: person2,
            job: "3D Design",
            tasks: 32,
            reviews: 510,
            rate: "4,9",
            isFollowed: true,
        },
    ];

    return (
        <div className="overview container">
            <div className="task">
                <h2 className="sub-heading">Running task</h2>
                <p className="todo-tasks">65</p>
                <div className="tasks-progress" data-task-completed="45">
                    <svg
                        style={{ "--percentage": "45" }}
                        className="tasks-percentage"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="34" cy="34" r="32" />
                        <circle cx="34" cy="34" r="32" />
                    </svg>
                    <p className="total-tasks">
                        100 <span>task</span>
                    </p>
                </div>
            </div>
            <div className="activity">
                <Chart />
            </div>
            <div className="mentors">
                <h2 className="title">
                    Monthly Mentors
                    <div className="arrows">
                        <MdOutlineKeyboardArrowLeft />
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </h2>
                <div className="mentors-container">
                    {
                        mentors.map(mentor => (
                    <Mentor>
                        <Mentor.Profile img={mentor.image} name={mentor.name} job={mentor.job}>
                            <Mentor.FollowBtn isFollowed={mentor.isFollowed} />
                        </Mentor.Profile>
                        <div className="mentor-data">
                            <Mentor.Tasks>{mentor.tasks} Tasks</Mentor.Tasks>
                            <Mentor.Review>{mentor.rate} ({mentor.reviews} Reviews)</Mentor.Review>
                        </div>
                    </Mentor>
                        ))
                    }
                </div>
            </div>  
        </div>
    );
};

export default Overview;
