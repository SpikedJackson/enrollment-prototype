import React from 'react';

const CourseTable = ({ courses, onCourseRemove }) => {
    return (
        <div className="course-container">
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course) => (
                        <li key={course.code}>
                            <div className="course-box">
                                {course.code} - {course.name}
                                    <button onClick={() => onCourseRemove(course)} style={{ marginLeft: '10px'}}>
                                        <img src={require('./images/delete.png')} className="button-image"/>
                                    </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default CourseTable;