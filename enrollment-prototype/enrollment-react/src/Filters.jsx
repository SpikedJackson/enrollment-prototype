import React, { useState } from 'react';
import courses from './courses.js';

const Filters = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Filter the courses based on the selected filter
    const filteredCourses = selectedFilter === 'all' 
        ? courses 
        : courses.filter(course => course.filter === selectedFilter);

    const handleShowDescription = (course) => {
        setSelectedCourse(selectedCourse && selectedCourse.code === course.code ? null : course);
    };

    return (
        <>
            <div className="box3-container">
                <div className="tab">
                    <button className="link" onClick={() => setSelectedFilter('all')}>All</button>
                    <button className="link" onClick={() => setSelectedFilter('required')}>Required</button>
                    <button className="link" onClick={() => setSelectedFilter('electives')}>Electives</button>
                </div>
                <div className="tab-content">
                    <div className="course-container">
                        {filteredCourses.map((course, index) => (
                            <div key={index} className="course-box">
                                <div className="course-info">
                                    <p className="course-code">{course.code} <button onClick={() => handleShowDescription(course)}>+</button></p>
                                    <p className="course-name">{course.name}</p>
                                </div>
                                <div>
                                    <hr></hr>
                                    {selectedCourse && selectedCourse.code === course.code && (
                                        <div>
                                            <p>{course.description}</p>
                                            <p>Prerequisites: {course.prerequisites}</p>
                                            <p>Antirequisites: {course.antirequisites}</p>
                                            <p>{course.units} Unit(s)</p>
                                            <button onClick={() => setSelectedCourse(null)}>-</button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Filters;
