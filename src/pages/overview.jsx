import { useRef, useEffect } from "react";

const Overview = () => {
    const rows = useRef(null);
    const columns = useRef(null)
    const dataPoints = useRef(null)

    useEffect(() => {
        if (rows.current && columns.current && dataPoints.current) {
            columns.current.style.setProperty("--height", rows.current.offsetHeight);
            const chartHeight = rows.current.offsetHeight;
            dataPoints.current.querySelectorAll(".data-point").forEach((point, i) => {
                let span = columns.current.querySelector(`span:nth-of-type(${i + 1})`);
                let offsetLeft = span.offsetLeft - columns.current.offsetLeft + 36 + (span.offsetWidth / 2);
                let offsetTopRatio = chartHeight/ (3 - 1);
                let offsetTop = offsetTopRatio * (point.dataset.value - 1);
                point.dataset.value > 1 ? point.style.cssText = "transform: translateY(50%)" : null;
                point.style.setProperty("--left", offsetLeft - (point.offsetWidth / 2));
                point.style.setProperty("--top", columns.current.offsetHeight + 10 + offsetTop);
            })
        }
    }, [])

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
                <div className="activity-info">
                    <h2 className="sub-heading">Activity</h2>
                    <select>
                        <option value="current">This Week</option>
                    </select>
                </div>
                <div className="activity-data">
                    <div className="rows" ref={rows}>
                        <span>3</span>
                        <span>2</span>
                        <span>1</span>
                    </div>
                    <div className="columns" ref={columns}>
                        <span>S</span>
                        <span>M</span>
                        <span>T</span>
                        <span>W</span>
                        <span>T</span>
                        <span>F</span>
                        <span>S</span>
                    </div>
                    <ul className="data-points" ref={dataPoints}>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="2"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="2"></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Overview;
