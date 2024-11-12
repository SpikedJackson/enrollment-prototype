import React from 'react';

const CourseTablePlanner = ({ courses, onCourseRemove, allYears, currentYear, years }) => {
    const displayCourse = (course) => {
        return (
            <div>
                <div className="course-info">
                    {course.code}
                </div>
                <button className="delete-button">
                    <img src={require('./images/delete.png')} className="button-image" />
                </button>
            </div>
        )
    }

    return (
        <div className="course-container">
            <div className="timetable-header">Yearly Planner</div>
            {courses.length > 0 ? (
                <>
                    {allYears ? <>
                        <div id="All Years" class="tab-content">
                            <div class="planner">
                                {years.map((year) => (
                                    <>
                                        <div class="year-row">{year}</div>
                                        <div class="course-row">
                                            {courses.map((course) => (
                                                (course.year === year) &&
                                                <div class="course-slot-planner planned" onClick={() => onCourseRemove(course)}>
                                                    {displayCourse(course)}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                            legend: <font color="#3a8ce0">■</font> = planned, <font color="#e7f473">■</font> = currently enrolled, <font color="#38e150">■</font> = completed
                        </div>
                    </> : <>
                        <div class="tab-content">
                            <div class="planner_single_year">
                                <div class="year-row">Planned</div>
                                <div class="course-row">
                                    {courses.map((course) => (
                                        (course.year === currentYear /**&& course.planned === true */) &&
                                        <div class="course-slot-planner planned" onClick={() => onCourseRemove(course)}>
                                            {displayCourse(course)}
                                        </div>
                                    ))}
                                </div>
                                <div class="year-row">Enrolled</div>
                                <div class="course-row">
                                    {courses.map((course) => (
                                        (course.year === currentYear && false /**&& course.enrolled === true */) &&
                                        <div class="course-slot-planner enrolled">
                                            {displayCourse(course)}
                                        </div>
                                    ))}
                                </div>
                                <div class="year-row">Completed</div>
                                <div class="course-row">
                                    {courses.map((course) => (
                                        (course.year === currentYear && false /**&& course.completed === true */) &&
                                        <div class="course-slot-planner completed">
                                            {displayCourse(course)}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>}
                </>
            ) : (
                <p>No courses selected.</p>
            )}
        </div>
    );
};

export default CourseTablePlanner;