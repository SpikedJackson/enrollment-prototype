import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import YearSelect from './YearSelect'; 
import CourseTable from './CourseTable'; 
import Filters from './Filters';
import { Link } from 'react-router-dom';


const PlanCourse = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleCourseSelect = (course) => {
        if (!selectedCourses.some(selected => selected.code === course.code)) {
            // add the course if it's not already in the selectedCourses array
            setSelectedCourses([...selectedCourses, course]);
        }
    };

    const handleCourseRemove = (courseToRemove) => {
        setSelectedCourses(selectedCourses.filter(course => course.code !== courseToRemove.code));
    };

    return (
        <>
            <div className="box">
                <SearchBar onCourseSelect={handleCourseSelect} />
            </div>
            <div className="box">
                <Filters />
            </div>
            <div className="box">
                <div className="vertical-stack-container">
                    {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove={handleCourseRemove}/>}
                </div>
            </div>

            <div class="to_planner">
                <a href="./horizontal-planner.html">Academic Planner ▼</a>
            </div>
            
            <div class="to_schedule">
            {/*This is a way to pass the selected courses to the Schedule component, since I can't do it with props */}
                <Link to="/schedule" state={{selectedCourses}}> 
                    Proceed to Schedule ▶
                </Link>
            </div>
        </>
    );
};

export default PlanCourse;
