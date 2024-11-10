import React from 'react';

const CourseTable = ({ courses, onCourseRemove, allYears, currentYear, years }) => {
    const displayCourse = (course) => {
        return (
            <div className="display-course">
                {course.code}
                <button onClick={() => onCourseRemove(course)} style={{ marginLeft: '10px' }}>
                    <img src={require('./images/delete.png')} className="button-image" />
                </button>
            </div>
        )
    }

    return (
        <div className="course-container">
            {courses.length > 0 ? (
                <>
                    {allYears ? <>
                        <div id="All Years" class="tab-content">
                            legend: <font color="#3a8ce0">■</font> = planned, <font color="#e7f473">■</font> = currently enrolled, <font color="#38e150">■</font> = completed
                            <div class="planner">
                                {years.map((year) => (
                                    <>
                                        <div class="year-row">{year}</div>
                                        <div class="course-row">
                                            {courses.map((course) => (
                                                (course.year === year) &&
                                                <div class="course-slot-planner planned">
                                                    {displayCourse(course)}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </> : <>
                        <div class="tab-content">
                            <div class="planner">
                                <div class="year-row">Planned</div>
                                <div class="course-row">
                                    {courses.map((course) => (
                                        (course.year === currentYear /**&& course.planned === true */) &&
                                        <div class="course-slot-planner planned">
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

export default CourseTable;