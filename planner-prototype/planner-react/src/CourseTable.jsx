import React from 'react';

const CourseTable = ({ courses, onCourseRemove, allYears, currentYear, years }) => {
    return (
        <div className="course-container">
            {courses.length > 0 ? (
                <>
                {allYears ? <>
                    <table>
                    {years.map((year) => (
                        <tr>
                            <td>
                                {year}
                            </td>
                            <td>
                                {courses.map((course) => (
                                    (course.year === year) &&
                                        <div className="course-box">
                                            {course.code} - {course.name} - {course.year}
                                                <button onClick={() => onCourseRemove(course)} style={{ marginLeft: '10px'}}>
                                                    <img src={require('./images/delete.png')} className="button-image"/>
                                                </button>
                                        </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                    </table>
                </> : <>
                    <ul>
                    {courses.map((course) => (
                        (course.year === currentYear) && 
                        <li key={course.code}>
                            <div className="course-box">
                                {course.code} - {course.name} - {course.year}
                                    <button onClick={() => onCourseRemove(course)} style={{ marginLeft: '10px'}}>
                                        <img src={require('./images/delete.png')} className="button-image"/>
                                    </button>
                            </div>
                        </li>
                    ))}
                </ul>
                </>}
                </>
            ) : (
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default CourseTable;