import Mentor from "../components/Mentor/Index";
import Chart from "../components/Chart"
import img from "../assets/images/person-1.png";

const Overview = () => {


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
                <Mentor>
                    <Mentor.Profile img={img} name="Curious George" job="UI UX Design">
                        <Mentor.FollowBtn />
                    </Mentor.Profile>
                    <div className="mentor-data">
                        <Mentor.Tasks>40 Tasks</Mentor.Tasks>
                        <Mentor.Review>4,7  (750 Reviews)</Mentor.Review>
                    </div>
                </Mentor>
            </div>
        </div>
    );
};

export default Overview;
