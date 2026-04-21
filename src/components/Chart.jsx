import { useRef, useEffect } from "react";

const Chart = () => {
    const rows = useRef(null);
    const columns = useRef(null)
    const dataPoints = useRef(null)
    const offsets = useRef([])

    function addDataToChart(ele) {
        offsets.current = []
        columns.current.style.setProperty("--height", rows.current.offsetHeight);
        const chartHeight = rows.current.offsetHeight;

        dataPoints.current
            .querySelectorAll(`${ele} .data-point`)
            .forEach((point, i) => {
                let span = columns.current.querySelector(`span:nth-of-type(${i + 1})`,);
                let offsetLeft = span.offsetLeft - columns.current.offsetLeft + 36 + (span.offsetWidth / 2);
                let offsetTopRatio = chartHeight / (3 - 1);
                let offsetTop = offsetTopRatio * (point.dataset.value - 1);

                offsets.current.push({
                    left: offsetLeft - point.offsetWidth / 2,
                    top: columns.current.offsetHeight + 10 + offsetTop,
                });

                point.style.setProperty("--left", offsets.current[i].left);
                point.style.setProperty("--top", offsets.current[i].top);
            });

        let offsetsCpy = offsets.current;
        for (let i = 0, n = offsetsCpy.length - 1; i < n; i++) {
            let p1 = offsetsCpy[i],
                p2 = offsetsCpy[i + 1];

            let dx = p1.left - p2.left;
            let dy = p1.top - p2.top; // 'top' is actually tracking the bottom offset here

            let hypotenuse = Math.sqrt(dx * dx + dy * dy);

            let angleInDegrees = Math.asin(dy / hypotenuse) * (180 / Math.PI);

            dataPoints.current
                .querySelector(ele)
                .children[i].style.setProperty("--hypotenuse", hypotenuse);
            dataPoints.current
                .querySelector(ele)
                .children[i].style.setProperty("--angle", angleInDegrees);
        }
    }

    function changeChart(e) {
        const {value} = e.target
        dataPoints.current.querySelectorAll(".data-points").forEach(point => {
            point.classList.remove("active")
        })

        if (value === "current") {
            dataPoints.current.querySelector(".data-points:nth-of-type(1)").classList.add("active")
        } else {
            dataPoints.current.querySelector(".data-points:nth-of-type(2)").classList.add("active")
        }
    }

    
    useEffect(() => {
        if (rows.current && columns.current && dataPoints.current) {
            addDataToChart(".data-points:nth-of-type(1)");
            addDataToChart(".data-points:nth-of-type(2)");
        }
    }, []);

    return (
        <>
            <div className="activity-info">
                <h2 className="sub-heading">Activity</h2>
                <select onChange={changeChart}>
                    <option value="current">This Week</option>
                    <option value="last-week">last Week</option>
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
                <div className="data-container" ref={dataPoints}>
                    <ul className="data-points active">
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="2"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="2"></li>
                    </ul>
                    <ul className="data-points">
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="1"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="3"></li>
                        <li className="data-point" data-value="2"></li>
                        <li className="data-point" data-value="2"></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Chart;
