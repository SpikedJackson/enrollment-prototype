import React from 'react';

const CourseTable = ({ courses }) => {
    return (
        <div className="course-container">
            {courses.length > 0 ? (
                <ul>
                    {courses.map((course) => (
                        <li key={course.code}>
                            <div className="course-box">
                                {course.code} - {course.name}
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