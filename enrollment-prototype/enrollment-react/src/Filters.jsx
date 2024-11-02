import React, { useState } from 'react';
import courses from './courses.js';
const Filters = () =>{
    const [selectedFilter, setSelectedFilter] = useState(['all']);

    //filter the courses based on the selected filter
    const filteredCourses = selectedFilter === 'all' 
        ? courses 
        : courses.filter(course => course.filter === selectedFilter);
    return(
        <>
            <div class="box3-container">
                <div class="tab">
                    <button class="link" onClick={() => setSelectedFilter('all')}>All</button>
                    <button class="link" onClick={() => setSelectedFilter('required')}>Required</button>
                    <button class="link" onClick={() => setSelectedFilter('electives')}>Electives</button>
                </div>
                <div className="tab-content">
                    <div className="course-container">
                        {filteredCourses.map((course, index) => (
                                <div key={index} className="course-box2">
                                    <p className="course-code">{course.code} <button>+</button></p>
                                    <p className="course-name">{course.name}</p>
                                </div>
                            ))}
                    </div>
                </div>
            
            </div>
        </>
    )
}
export default Filters;
