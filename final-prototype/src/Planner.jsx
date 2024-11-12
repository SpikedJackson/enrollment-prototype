import { Link } from 'react-router-dom';
import Requirements from './Requirements';
import CourseSearchPlanner from './CourseSearchPlanner';

function Planner() {

    return (
        <div className="container">
            <div className="vertical-stack-container">
                <div style = {{display: "flex", flexDirection: "row", width: "100%"}}>
                    <div className="box" style={{flex:'0.3'}}>
                        <Requirements />
                    </div>
                    <CourseSearchPlanner />
                </div>
                <div className="to_timetable2" style = {{marginLeft: "auto", marginRight: "20px"}}>
                    <Link to="/">
                        Proceed to Timetable ▶
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Planner;
