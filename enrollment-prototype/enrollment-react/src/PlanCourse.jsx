import React, { useState } from 'react';
import SearchBar from './SearchBar'; 
import YearSelect from './YearSelect'; 
import CourseTable from './CourseTable'; 


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
                <div className="vertical-stack-container">
                    <YearSelect />
                    {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove={handleCourseRemove}/>}
                </div>
            </div>
        </>
    );
};

export default PlanCourse;
