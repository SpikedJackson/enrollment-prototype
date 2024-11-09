import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import courses from './courses.js';
import CourseTable from './CourseTable';
import { Link } from 'react-router-dom';

const CourseSearch = () => {
    const [selectedFilter, setSelectedFilter] = useState('all'); 
    const [selectedCourse, setSelectedCourse] = useState(null); 
    const [selectedCourses, setSelectedCourses] = useState([]);

    //filter the courses based on the selected filter
    const filteredCourses = selectedFilter === 'all' 
        ? courses 
        : courses.filter(course => course.filter === selectedFilter);

    const onCourseSelect = (course) => {
        setSelectedCourse(course); //use to display course information
    };

    
    const handleAddCourseToTable = () => {
        if (selectedCourse && !selectedCourses.some(course => course.code === selectedCourse.code)) {
            setSelectedCourses([...selectedCourses, selectedCourse]); //add course to the table
        }
    };

    const handleCourseRemove = (courseToRemove) => {
        setSelectedCourses(selectedCourses.filter(course => course.code !== courseToRemove.code)); //remove course from table
    };

    return (
        <>
            <div className="box" style={{ display: 'flex', alignItems: 'flex-start', width: '100%', 
                // border: '1px solid black'  
                }}>
                <div style={{ flex: '0 1 300px', paddingRight: '20px' }}>
                    <Filters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} courses={filteredCourses} />
                    <SearchBar 
                    courses={filteredCourses} 
                    onCourseSelect={onCourseSelect} />
                    
                </div>

                {selectedCourse && (
                    <div className="course-widget">
                        <h2>Selected Course Details:</h2>
                        <p><strong>{selectedCourse.code}</strong> - {selectedCourse.name}</p>
                        <p>{selectedCourse.description}</p>
                        <p>Prerequisites: {selectedCourse.prerequisites}</p>
                        <p>Antirequisites: {selectedCourse.antirequisites}</p>
                        <p>{selectedCourse.units} Unit(s)</p>
                        <button onClick={handleAddCourseToTable}>
                                + Add to Course Table
                        </button>
                    </div>
                )}
            </div>

            <div className="box">
                <div className="vertical-stack-container">
                    {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove={handleCourseRemove} />}
                </div>
            </div>
            
            <div className="to_planner">
                <a href="./horizontal-planner.html">Academic Planner ▼</a>
            </div>
            
            <div className="to_schedule">
                {/* Pass selectedCourses to the Schedule component */}
                <Link to="/schedule" state={{ selectedCourses }}> 
                    Proceed to Schedule ▶
                </Link>
            </div>
        </>
    );
};

export default CourseSearch;
