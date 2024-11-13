import React, { useState } from 'react';
import CourseSearch from './CourseSearch';
import YearSelect from './YearSelect'; 
import CourseTable from './CourseTable'; 


const PlanCourse = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [currentYear, setCurrentYear] = useState(1);
    const [allYears, setAllYears] = useState(false);
    const [years, setYears] = useState([1, 2, 3, 4]);

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
                <CourseSearch blah={handleCourseSelect}/>
            </div>
            <div className="box">
                <div className="vertical-stack-container">
                    <YearSelect currentYear = {currentYear} setCurrentYear = {setCurrentYear} allYears={allYears} setAllYears={setAllYears} years={years} setYears={setYears}/>
                    {selectedCourses.length > 0 && <CourseTable courses={selectedCourses} onCourseRemove = {handleCourseRemove} allYears={allYears} currentYear={currentYear} years={years}/>}
                </div>
            </div>
        </>
    );
};

export default PlanCourse;
