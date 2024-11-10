import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import colors from './colors';

function Schedule() {
    const location = useLocation();
    const { selectedCourses } = location.state || { selectedCourses: [] }; //make it an empty array if no data passed
    
    //set selected courses to passed in courses
    const [courses, setCourses] = useState(selectedCourses);

    //function to handle removing a course from the schedule
    const handleRemoveCourse = (courseToRemove) => {
        //filter out the course to remove
        const updatedCourses = courses.filter(course => course.code !== courseToRemove.code);
        setCourses(updatedCourses); 
    };

    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="box1-container">
                        <div className="course-container1">
                            {courses.length === 0 ? (
                                <p>No courses selected yet.</p>
                            ) : (
                                courses.map((course, index) => (
                                    <div key={index} className="course-box" style={{ background: `linear-gradient(to bottom, ${colors[index % colors.length]} 50%, #FFFFFF)` }}>
                                        <div className="course-info">
                                            <p className="course-code">{course.code}</p>
                                        </div>
                                        <button 
                                            onClick={() => handleRemoveCourse(course)} 
                                            style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer' }}
                                        >
                                            <img 
                                                src={require('./images/delete.png')} 
                                                className="button-image"
                                                alt="Delete"
                                                style={{ width: '20px', height: '20px' }} 
                                            />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="timetable">
                        <div className="timetable-header">Weekly Course Schedule</div>
                        <div className="time-column">Time</div>
                        <div className="day-column">Monday</div>
                        <div className="day-column">Tuesday</div>
                        <div className="day-column">Wednesday</div>
                        <div className="day-column">Thursday</div>
                        <div className="day-column">Friday</div>

                        <div className="time-column">9:00 - 10:00</div>
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0]}}>★ {courses[0].code}</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1]}}>★ {courses[1].code}</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">10:00 - 11:00</div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2]}}>{courses[2].code}</div>
                        )}
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3]}}>{courses[3].code}</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>

                        <div className="time-column">11:00 - 12:00</div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1]}}>★ {courses[1].code}</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4]}}>{courses[4].code}</div>
                        )}
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0]}}>★ {courses[0].code}</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">12:00 - 1:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2]}}>{courses[2].code}</div>
                        )}
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3]}}>{courses[3].code}</div>
                        )}

                        <div className="time-column">1:00 - 2:00</div>
                        {courses.length === 0 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[0]}}>★ {courses[0].code}</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 1 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[1]}}>★ {courses[1].code}</div>
                        )}
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>

                        <div className="time-column">2:00 - 3:00</div>
                        <div className="course-slot"></div>
                        {courses.length <= 2 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[2]}}>{courses[2].code}</div>
                        )}
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4]}}>{courses[4].code}</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">3:00 - 4:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 3 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[3]}}>{courses[3].code}</div>
                        )}
                        <div className="course-slot"></div>

                        <div className="time-column">4:00 - 5:00</div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        <div className="course-slot"></div>
                        {courses.length <= 4 ? (
                            <div className="course-slot"></div>
                        ) : (
                            <div className="course-slot" style = {{backgroundColor: colors[4]}}>{courses[4].code}</div>
                        )}
                    </div>
                </div>
            </div>
            <div className="to_timetable2">
                <Link to="/">
                    ◀ Return to Timetable
                </Link>
            </div>
            <div className="to_enroll">
                Enroll ▶
            </div>
        </>
    );
}

export default Schedule;
